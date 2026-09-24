import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Hellow from Gateway!");
})

app.use("/api/auth",proxy(process.env.AUTH_SERVICE_URL))

app.listen(PORT,()=>{
    console.log(`Gatewy Started on ${PORT}`); 
})