const mongoose = require("mongoose")
const dotenv = require('dotenv');


dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("Database connected successfully")
    }
    catch (error) {
        console.log(error)

    }

}
connectDb()
mongoose.set("debug",true)

module.exports.Students=require("./student.js")
module.exports.Admins=require("./admin.js")
module.exports.Colleges=require("./college.js")

