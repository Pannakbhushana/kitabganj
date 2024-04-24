const mongoose=require("mongoose");

const carouselScema=mongoose.Schema({
    titleColor:String,
    textColor:String,
    title:String,
    text:String,
    image:String
},{
    versionKey:false
})

const CarouselModel=mongoose.model("carousel",carouselScema)

module.exports={CarouselModel}