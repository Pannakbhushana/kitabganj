const express=require("express");
const carouselRouter=express.Router()
const {CarouselModel}=require("../model/carousel.model")
const {authorization}=require("../middleware/authorization.middleware")

carouselRouter.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const carousel= await CarouselModel.find(query);
        res.status(200).send(carousel)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

carouselRouter.use(authorization)

carouselRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body;
        const carousel=CarouselModel(payload);
        await carousel.save()
        res.status(200).send({msg:"sliding image added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

carouselRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try {
        await CarouselModel.findByIdAndUpdate({_id:id},payload);
        res.status(200).send({"msg":"carousel has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

carouselRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await CarouselModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"carousel has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={
    carouselRouter
}