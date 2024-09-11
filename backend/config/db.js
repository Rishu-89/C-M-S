import mongoose from "mongoose";

 const dbConnect=async()=>{
  try {
    await mongoose.connect(`mongodb+srv://rishu2507p:Rishu123@cluster0.0bwl5.mongodb.net/Content_M_System`);
    console.log("Database is Connected");
  } catch (error) {
    console.log("error in mongoDb",error);
  }
}

export default dbConnect;

// ?retryWrites=true&w=majority&appName=Cluster0