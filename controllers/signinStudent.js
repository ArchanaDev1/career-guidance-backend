const db = require("../db/index.js");
const argon = require("argon2");
const jwt = require('jsonwebtoken');

const signinStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await db.Students.findOne({ email });
    if (response) {
        if (await argon.verify(response.password, password)) {
          res.status(200).send({
            _id: response._id,
            name: response.name,
            email: response.email,
            highestEducation: response.highestEducation,
            selectedCollege: response.electedCollege,
            phone: response.phone,
            location: response.location,
            gender: response.gender,
            token: jwt.sign({
              _id: response._id,
              email: response.email,
              password: response.password
            }, "JWT_SECRET")
          });
        } else{
            res.status(404).send({ message: "Wrong Password" });
        }
    } else {
      res.status(404).send({ message: "User doesn't exist" });
    }
  } catch (error) {
    console.log("Database error while searching student", error);
    res.status(500).send({ error });
  }
};
module.exports = signinStudent;
