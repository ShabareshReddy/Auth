const express =require('express');
const userRouter=express.Router();


const app=express();
app.use(express.json()); 

userRouter.post("/signup",(req,res)=>{
    res.send("user signed up");
});

userRouter.post("/login",(req,res)=>{
    res.send("user logged in");
});

userRouter.get("/profile",(req,res)=>{
    res.send("user profile");
});

userRouter.put("/profile",(req,res)=>{
    res.send("user profile updated");
});

userRouter.delete("/profile",(req,res)=>{
    res.send("user profile deleted");
});

module.exports=userRouter;

