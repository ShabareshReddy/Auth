const express=require('express');
const dotenv=require('dotenv');

dotenv.config();
const app=express();

app.use(express.json());

const userRouter=require("./routes/user")


app.use("/user",userRouter);



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});





