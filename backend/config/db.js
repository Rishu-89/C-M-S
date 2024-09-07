import mongoose from "mongoose";

 const dbConnect=async()=>{
  try {
    await mongoose.connect(`mongodb://localhost:27017/Content_M_System`);
    console.log("Database is Connected");
  } catch (error) {
    console.log("error in mongoDb",error);
  }
}

export default dbConnect;