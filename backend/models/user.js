import mongoose from "mongoose";

let userModel=mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  number:{
    type:Number,
    require:true
  },
  password:{
    require:true,
    type:String
  }

})

export default mongoose.model("user",userModel);