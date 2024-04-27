const express=require("express");
const chotiDukaanRouter=express.Router()
const {DukaanModel}=require("../model/chotidukaan.model")
const {authorization}=require("../middleware/authorization.middleware")


chotiDukaanRouter.get("/", async (req, res) => {
    const { page = 1, limit = 12, ...filters } = req.query; 
    const skip = (page - 1) * limit;
    try {
        const query = DukaanModel.find(filters)
            .skip(skip)
            .limit(parseInt(limit));
        const posts = await query.exec();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

chotiDukaanRouter.use(authorization)

chotiDukaanRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        const post=DukaanModel(payload);
        await post.save()
        res.status(200).send({msg:"post added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

chotiDukaanRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await DukaanModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"post has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

chotiDukaanRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await DukaanModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"post has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={chotiDukaanRouter}