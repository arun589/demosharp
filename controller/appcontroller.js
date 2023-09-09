const todo2=require('../model/todorem');
const todo3=require('../model/todoDone');
exports.posttodo=async(req,res,next)=>{
    try{
        const todo1=req.body.todo;
        const description=req.body.description;
       
        const data=await todo2.create({todo:todo1,description:description});
        res.status(201).json({newtodo:data});

    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}
exports.getalltodo=async(req,res,next)=>{
    try{
        const data=await todo2.findAll();
        res.status(201).json({alluser:data})
    }
    catch(err){
        console.log("failed",err);
        res.status(500).json({
            error:err
        })
        
    }
}
exports.done=async(req,res,next)=>{
    const todo4=req.body.todo;
    const description=req.body.description;
    const id=req.params.id;
    try{
        const data=await todo3.create({todo:todo4,description:description});
        const datade= await todo2.findByPk(id);
        await datade.destroy();
        res.status(201).json({newtodo:data});
    }
       
    catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
    
}