const Teacher= require('../model/teacher');
const getAllTeacher=async(req,res)=>{
    const {email}=req.query;
    if(email==undefined){
        const data= await Teacher.find();
        if(data.length){
            return res.status(200).send(data);
        }
        else{
            return res.send('no teacher found!');
        }
    }
    else{
        const data= await Teacher.find({email});
        return res.status(201).send(data);
    }
}


const teacherCreate=async(req,res)=>{
    const teacher=new Teacher(req.body);
    const data=await teacher.save();
    return res.status(201).send(data);
}
module.exports={
    getAllTeacher,
    teacherCreate
}