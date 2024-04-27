const mongoose=require("mongoose");

const blogScema=mongoose.Schema( {
      title:String,
      heading:String,
      description: String,
      image:String,
  },{
    versionKey:false
})

const BlogModel=mongoose.model("blog",blogScema)

module.exports={BlogModel}