const mongoose=require("mongoose");

const authScema=mongoose.Schema({
    email:String,
    password:String
},{
    versionKey:false
})

const AuthModel=mongoose.model("authentication",authScema)

module.exports={AuthModel}