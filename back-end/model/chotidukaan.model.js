const mongoose=require("mongoose");

const dukaanScema=mongoose.Schema( {
      title:String,
      description: String,
      image:String,
      external:String
  },{
    versionKey:false
})

const DukaanModel=mongoose.model("chotiDukaan",dukaanScema)

module.exports={DukaanModel}