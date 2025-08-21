const express=require('express');
const dotenv=require('dotenv');
const mongoose =require("mongoose");
const connectDb=require("./db");
dotenv.config();
const app=express();

app.use(express.json());

const userRouter=require("./routes/user")


app.use("/user",userRouter);


connectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err)=>{
    console.error("ConnectDb failed:", err);
})




