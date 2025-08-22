const express =require('express');
const userRouter=express.Router();
const {validateSignup}=require("../utils/validation");
const UserModel=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv = require("dotenv");
const userAuth = require("../middleware/auth");
dotenv.config();


userRouter.post("/signup",async(req,res)=>{
    try{
        validateSignup(req);
        const {name, email, password} =req.body;
        const userExist=await UserModel.findOne({email});
        if(userExist){
         return res.status(400).json({ message: 'Email already exists' });
        }
        const hashpassword= await bcrypt.hash(password, 10);
        const user =await UserModel.create({
            name,
            email,
            password: hashpassword
        });
        return res.status(200).json({
            message:"User created successfully",
            
        })

    }catch(err){
     res.status(400).send("ERROR " + err.message);
    }
});

userRouter.post("/login",async(req,res)=>{
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    return res.status(200).json({
      message: "Login successful",
      token,
    });
  }catch(err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});
       

userRouter.get("/profile",userAuth,(req,res)=>{
    const loggedInUser=req.user;
    const {name,email}= loggedInUser;
    res.status(200).json({
        name,
        email
    });
});

userRouter.put("/profile",userAuth,async(req,res)=>{
  try{
     const loggedInUser=req.user;
     const {name, password}=req.body;
     const user=await UserModel.findById(loggedInUser._id);
     if(!user){
      return res.status(404).json({
        message: "User not found"
     });
     }
     if(name){
      user.name=name;
     }
     if(password){
      const hashpassword=await bcrypt.hash(password,10);
      user.password=hashpassword;  
     }
     await user.save();
       return res.status(200).json({
        message: "User profile updated successfully",
      })
  }catch(err){
    res.status(400).send("ERROR " + err.message);
  } 
});

userRouter.delete("/profile",userAuth,async(req,res)=>{
  try{
     const loggedInUser =req.user;
     const user=await UserModel.findByIdAndDelete(loggedInUser._id);
     if(!user){
      return res.status(404).json({
        message: "User not found"
      });
     }
     res.status(200).json({
        message: "User deleted successfully"
     })
  }catch(err){
    res.status(400).send("ERROR " + err.message);
  }
});

module.exports=userRouter;

