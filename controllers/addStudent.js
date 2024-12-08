const db = require("../db/index");
const argon = require("argon2");

const addStudent = async (req, res) => {
    const {
        name,
        email,
        password
      } = req.body;
    
      try {
        const response = await db.Students.create({
          name,
          email,
          password: await argon.hash(password)
        });
        console.log("Response: ", response);
        if (response) {
          res.status(201).json({ message: "Student has been added successfully"});
        } else {
            res.status(401).json({message: "Invalid student details"})
        }
      } catch (error) {
        console.log("error in adding student", error);
        res.status(500).json({ message: "Server error" });
      }
}
    
module.exports = addStudent;