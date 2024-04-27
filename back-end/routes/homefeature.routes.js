const express=require("express");
const homeFeatureRouter=express.Router()
const {HomeFeatureModel}=require("../model/homefeature.model")
const {authorization}=require("../middleware/authorization.middleware")


homeFeatureRouter.get("/", async (req, res) => {
    const { page = 1, limit = 5, ...filters } = req.query; 
    const skip = (page - 1) * limit;
    try {
        const query = HomeFeatureModel.find(filters)
            .skip(skip)
            .limit(parseInt(limit));
        const posts = await query.exec();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

homeFeatureRouter.use(authorization)

homeFeatureRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        console.log(payload)
        const post=HomeFeatureModel(payload);
        await post.save()
        res.status(200).send({msg:"post added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

homeFeatureRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await HomeFeatureModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"post has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

homeFeatureRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await HomeFeatureModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"post has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={homeFeatureRouter}