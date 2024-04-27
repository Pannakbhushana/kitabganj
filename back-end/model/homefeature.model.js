const mongoose=require("mongoose");

const homeFeatureScema=mongoose.Schema( {
      tabDescription:String,
      title:String,
      description: String,
      image:String,
      external:String,
    
  },{
    versionKey:false
})

const HomeFeatureModel=mongoose.model("homeFeature",homeFeatureScema)

module.exports={HomeFeatureModel}