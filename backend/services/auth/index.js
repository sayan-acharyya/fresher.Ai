import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8001;

app.get("/",(req,res)=>{
    res.send("Hellow from Auth-Service!");
})

app.listen(PORT,()=>{
    console.log(`Auth-Service Started on ${PORT}`); 
})