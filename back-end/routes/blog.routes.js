const express=require("express");
const blogRouter=express.Router()
const {BlogModel}=require("../model/blog.model")
const {authorization}=require("../middleware/authorization.middleware")


blogRouter.get("/",async(req,res)=>{
    const { page = 1, limit = 100, ...filters } = req.query; 
    const skip = (page - 1) * limit;
    try {
        const query = BlogModel.find(filters)
            .skip(skip)
            .limit(parseInt(limit));
        const posts = await query.exec();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
})

blogRouter.use(authorization)

blogRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        const post=BlogModel(payload);
        await post.save()
        res.status(200).send({msg:"post added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

blogRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await BlogModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"post has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

blogRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await BlogModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"post has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={blogRouter}