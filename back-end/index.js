const express=require("express");
const {connection}=require("./db")
const {carouselRouter}=require("./routes/carousel.routes");
const {authRouter}=require("./routes/auth.routes");
const cors=require("cors")
require("dotenv").config()

const app=express();
app.use(express.json())
app.use(cors())
app.use("/admin/kitabganj",authRouter)
app.use("/carousel",carouselRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("not able to connect db")
        console.log(error.message)
    }
    console.log(`server is running at port ${process.env.port}`)
})