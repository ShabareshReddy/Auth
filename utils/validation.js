const validator=require("validator");

const validateSignup=(req)=>{
    const {name ,email ,password} = req.body;
    if(!name || !email || !password){
        throw new Error("All fields are requires");
    }
    if(!validator.isEmail(email)){
        throw new Error("Invalid email format");
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Password must be Strong");
    }
}

module.exports= {validateSignup};