const mongoose=require("mongoose")
const student=mongoose.Schema({ 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    highestEducation:{
        type:Object,
    },
    selectedCollege:{
        type:Object,
    },
    phone:{
        type:String,
    },
    location:{
        type:String,
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    
})

const Students=mongoose.model("Students",student)
module.exports=Students

