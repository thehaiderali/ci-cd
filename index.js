import express from "express"

const app=express()
const port=process.env.PORT || 4000
app.use(express.json())

app.get("/",(req,res)=>res.json({
    message:"CI-CD Server API"
}))
app.get("/ping",(req,res)=>{
    res.send("PONG")
})
app.get("/health",(req,res)=>res.status(200).json({
    status:"OK",
    timestamp:Date.now(),

}))

app.listen(port,()=>{
    console.log("The Server is Running Fine")
})