const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb=async()=>{
    const connection=await mongoose.connect(process.env.MONGODB_URL);
}

module.exports=connectDb;