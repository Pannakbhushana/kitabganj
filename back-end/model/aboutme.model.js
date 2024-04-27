const mongoose=require("mongoose");

const aboutMeScema=mongoose.Schema( {
      title:String,
      description: String,
      image:String,
  },{
    versionKey:false
})

const AboutMeModel=mongoose.model("aboutme",aboutMeScema)

module.exports={AboutMeModel}