const express= require('express');
const app= express();
require("dotenv").config();
const mongoose = require('mongoose');
const studentRoute= require('./route/student')
var bodyParser = require('body-parser')
const teacherRoute=require('./route/teacher')
app.use(bodyParser.json())
app.use(teacherRoute)
app.use(studentRoute);

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('*',(req,res)=>{
    res.send("Route problem! ")
})


mongoose.connect('mongodb://localhost:27017/mern03',{

}).then(()=>console.log("Yes! database created"))
.catch((err)=>console.log(err))

const port= process.env.PORT;
app.listen(port, ()=>console.log(`The server is running ar port ${port}`))