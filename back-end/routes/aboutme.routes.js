const express=require("express");
const aboutMeRouter=express.Router()
const {AboutMeModel}=require("../model/aboutme.model")
const {authorization}=require("../middleware/authorization.middleware")


aboutMeRouter.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const post= await AboutMeModel.find(query);
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

aboutMeRouter.use(authorization)

aboutMeRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        console.log(payload)
        const post=AboutMeModel(payload);
        await post.save()
        res.status(200).send({msg:"post added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

aboutMeRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await AboutMeModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"post has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

aboutMeRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await AboutMeModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"post has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={aboutMeRouter}