import express from "express";
import color from 'color'
import dotenv from 'dotenv'
import morgan from "morgan";
import dbConnect from "./config/db.js";
import authRoutes from './routes/auth.js'
<<<<<<< HEAD
import blogRoutes from './routes/blog.js'
=======
>>>>>>> 3d499b9546485dafc73fa5a0b67f92c91966f5da
import cors from 'cors'


dotenv.config();
dbConnect();
let app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1/auth',authRoutes);
<<<<<<< HEAD
app.use('/api/v1/blog',blogRoutes);
=======
>>>>>>> 3d499b9546485dafc73fa5a0b67f92c91966f5da


app.get('/',(req,res)=>{
  res.send('Hii');
})


let PORT= 8080;
app.listen(PORT,()=>{
  console.log(`Server is starting on ${PORT}`);
})