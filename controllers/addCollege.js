const db = require("../db/index");

const addCollege = async (req, res) => {
  const {
    id,
    name,
    email,
    courses,
    phone,
    location,
    isAbroad,
    officeLocation,
  } = req.body;

  try {
    const response = await db.Colleges.create({
      id,
      name,
      email,
      courses,
      phone,
      location,
      isAbroad,
      officeLocation,
    });
    console.log("Response: ", response);
    if (response) {
      res.status(201).json({ message: "College has been added successfully"});
    } else {
        res.status(401).json({message: "Invalid College details"})
    }
  } catch (error) {
    console.log("error in adding college", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = addCollege;
