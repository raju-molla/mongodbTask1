const mongoose = require('mongoose');
const {Schema}= mongoose;
const teacherSchema=new Schema({
    FullName:String,
    education: String,
    position:String,
    contactNo: Number,
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true
    },
    password:String,
    isDelete:{
        type:Boolean,
        default: false,
    }
})

module.exports=mongoose.model('teacher',teacherSchema);