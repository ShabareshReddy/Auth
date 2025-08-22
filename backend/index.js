const express=require('express');
const dotenv=require('dotenv');
const mongoose =require("mongoose");
const connectDb=require("./db");
dotenv.config();
const app=express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}));

const userRouter=require("./routes/user")


app.use("/", userRouter);



connectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.error("ConnectDb failed:", err);
})




