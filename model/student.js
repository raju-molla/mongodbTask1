const mongoose = require('mongoose');
const {Schema}=mongoose;
const studentSchema= new Schema({
    firstName:String,
    lastName: String,
    mobile:String,
    country: String,
    email:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },
    password: String,
    isDelete:{
        type: Boolean,
        default: false
    }
})

module.exports=mongoose.model('student',studentSchema);