const express=require("express");
const poemRouter=express.Router()
const {PoemModel}=require("../model/poem.model")
const {authorization}=require("../middleware/authorization.middleware")


poemRouter.get("/", async (req, res) => {
    const { page = 1, limit = 5, ...filters } = req.query; 
    const skip = (page - 1) * limit;
    try {
        const query = PoemModel.find(filters)
            .skip(skip)
            .limit(parseInt(limit));
        const posts = await query.exec();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

poemRouter.use(authorization)

poemRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        const post=PoemModel(payload);
        await post.save()
        res.status(200).send({msg:"post added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

poemRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await PoemModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"post has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

poemRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await PoemModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"post has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={poemRouter}