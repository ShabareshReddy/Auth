const express=require('express');
const dotenv=require('dotenv');
const mongoose =require("mongoose");
const connectDb=require("./db");
dotenv.config();
const app=express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}));

const userRouter=require("./routes/user")

app.use('/api', userRouter);


connectDb().then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.error("ConnectDb failed:", err);
})


module.exports = app;

