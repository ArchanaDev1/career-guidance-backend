const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
const addCollege = require("./controllers/addCollege");
const getCollegeList = require("./controllers/getCollegeList");
const addStudent = require("./controllers/addStudent");
const signinStudent = require("./controllers/signinStudent");


dotenv.config();

app.use(cors())
app.use(express.json())

app.post("/api/admin/add-college", addCollege);
app.get("/api/college-list", getCollegeList);

app.post("/api/signup-student", addStudent);
app.post("/api/signin-student", signinStudent);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

