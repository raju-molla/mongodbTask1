const express= require('express');
const route= express.Router();
const {getAll,create}=require('../controller/student')
route.get('/all-student',getAll);
route.post('/student/create',create);

module.exports=route;