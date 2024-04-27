const mongoose=require("mongoose");

const poemScema=mongoose.Schema( {
      imageHeight:String,
      title:String,
      description: String,
      image:String,
      poem:String
  },{
    versionKey:false
})

const PoemModel=mongoose.model("poem",poemScema)

module.exports={PoemModel}