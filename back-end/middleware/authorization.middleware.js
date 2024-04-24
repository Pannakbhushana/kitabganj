const jwt=require("jsonwebtoken");

const authorization=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,"ironmen")
        if(decode){
            next()
        }
        else{
            res.status(400).send({"msg":"Please login first"})
        }
    }
    else{
        res.status(400).send({"msg":"Please login first"})
    }
}

module.exports={authorization}