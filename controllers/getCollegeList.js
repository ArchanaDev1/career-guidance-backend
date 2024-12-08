const db = require("../db/index");

const getCollegeList = async (req, res) => {
  try {
    const response = await db.Colleges.find();
    if (response) {
      res.status(200).json(response);
    } else {
        console.log("Respons: ", response)
        res.status(404).json({message: "College not found"})
    }
  } catch (error) {
    console.log("error in finding college", error);
    res.status(502).json({ message: "Server error" });
  }
};

module.exports = getCollegeList;
