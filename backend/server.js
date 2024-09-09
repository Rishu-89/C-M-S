import express from "express";
import color from 'color'
import dotenv from 'dotenv'
import morgan from "morgan";
import dbConnect from "./config/db.js";
import authRoutes from './routes/auth.js'

import blogRoutes from './routes/blog.js'

import cors from 'cors'


dotenv.config();
dbConnect();
let app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1/auth',authRoutes);

app.use('/api/v1/blog',blogRoutes);



app.get('/',(req,res)=>{
  res.send('Hii');
})


let PORT= 8080;
app.listen(PORT,()=>{
  console.log(`Server is starting on ${PORT}`);
})