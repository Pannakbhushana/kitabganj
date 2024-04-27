const express=require("express");
const {connection}=require("./db")
const {carouselRouter}=require("./routes/carousel.routes");
const {authRouter}=require("./routes/auth.routes");
const {homeFeatureRouter}=require("./routes/homefeature.routes")
const {aboutMeRouter}=require("./routes/aboutme.routes")
const {poemRouter}=require("./routes/poem.routes")
const {blogRouter}=require("./routes/blog.routes")
const {chotiDukaanRouter}=require("./routes/chotidukaan.routes")
const cors=require("cors")
require("dotenv").config()

const app=express();
app.use(express.json())
app.use(cors())
app.use("/admin/kitabganj",authRouter)
app.use("/carousel",carouselRouter)
app.use("/homefeature",homeFeatureRouter)
app.use("/aboutme",aboutMeRouter)
app.use("/poem",poemRouter)
app.use("/blog",blogRouter)
app.use("/chotidukaan",chotiDukaanRouter)

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