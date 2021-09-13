const Student= require('../model/student')
const getAll=async(req,res)=>{
    const {email}=req.query;
    
    if(email==undefined){
        const data=await Student.find();
        if(data.length){
            return res.status(200).send(data);
        }
        else {
            return res.status(200).send('No student found!');
        }
    }
    else{
        const data =await Student.findOne({email:email});
        if(data){
            return res.status(200).send(data);
        }
        else{
            res.send('email doesn not match')
        }
        
    }
    
}


const create=async(req,res)=>{
    const student= new Student(req.body);
    const data= await student.save();
    return res.status(201).send(data);
}

module.exports={
    getAll,
    create
}