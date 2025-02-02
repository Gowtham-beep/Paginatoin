import express from "express";
import cors from 'cors'
import 'dotenv/config'
import DBconnection from "./DB/db.js";
import router from "./routes/routes.js";

const app= express()

app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
     res.send({message:"You have summoned pagination"})
    })
app.use('/api',router)
 DBconnection()
app.listen(process.env.PORT||3000,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})