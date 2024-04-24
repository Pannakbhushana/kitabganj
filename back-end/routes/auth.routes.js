const express=require("express");
const {AuthModel}=require("../model/auth.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");


const authRouter=express.Router()

authRouter.post("/register", async(req,res)=>{
    const {email,password}=req.body;
        bcrypt.hash(password, 3, async function(err, hash) {
            try {
                if(email && password){
                    const user=new AuthModel({email:email, password:hash});
                    await user.save();
                    res.status(200).send({"msg":"user SignUp successfully",token:jwt.sign({"name":user._id},"ironmen")});
                }
                else{
                    res.status(200).send({"msg":"invalid input"})
                }
            } catch (error) {
                res.status(200).send({"msg":error.message})
            }
        });
})

authRouter.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await AuthModel.findOne({email})
    if(user){
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                res.status(200).send({msg:"Login successfully !", token:jwt.sign({"name":user._id},"ironmen")});
            }
            else{
                res.status(400).send({msg:"Wronge Credentials"});
            }
        });
    }
    else{
        res.status(400).send({msg:"Wronge Credentials"});
    }
    } catch (error) {
        res.status(400).send({msg:error.message}); 
    }


})

authRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await AuthModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"user has been deleted successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


module.exports={authRouter};