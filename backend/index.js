import express from "express";
import cors from 'cors'
import 'dotenv/config'
import DBconnection from "./DB/db.js";

const app= express()

app.use(cors())
app.use(express.json())

 DBconnection()
app.listen(process.env.PORT||3000,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})