const express= require('express');
const route= express.Router();
const {getAllTeacher,teacherCreate}= require('../controller/teacher')

route.get('/all-teacher',getAllTeacher);
route.post('/teacher/create',teacherCreate);

module.exports=route;