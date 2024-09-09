import jwt from 'jsonwebtoken'
import userModel from "../models/user.js";
import { hashedPassowrd ,checkPassword} from "../helper/authHelper.js";



export const registerController = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    // Validate required fields
    if (!name || !email || !password || !number) {
      return res.send({
        message: "All fields are required",
        success: false,
      });
    }
    
    // Check if user already exists
    let registeredUser = await userModel.findOne({ email });
   
    if (registeredUser) {
      return res.status(200).send({
        message: "User already registered. Please login.",
        success: false,
      });
    }

    // Hash the password
    let encrptPass = await hashedPassowrd(password);

    // Create and save the new user
    const user = await new userModel({ name, email, password: encrptPass, number }).save();
    return res.status(201).send({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in registration",
    });
  }
};



export const loginController=async(req,res)=>{

try {
  let {email,password}=req.body;

let user=await userModel.findOne({email});
if(!user){
return res.status(404).send({
  message:"Please register first",
  success:false
})
}



let validatePassword=await checkPassword(password,user.password);
if(validatePassword){
 let token=jwt.sign({id:user._id},"kjhgfds");
 return res.status(200).send({
  message:"Login sucessfull",
  success:true,
  user,
  token
 })
}
else{
  return res.status(400).send({
    message:"Error in email or password",
    success:false
  })
}

  
} catch (error) {
  console.log(error)
  return res.status(400).send({
    message:"error in login",
    success:false
  })
}

}