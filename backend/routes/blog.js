import express from 'express'
import { createBlogController } from '../controlers/blogController.js';
import { isLogin } from '../middleware/authMiddleware.js';
import formidableMiddleware from 'express-formidable'

let route=express.Router();

route.post('/create-blog',isLogin,formidableMiddleware(),createBlogController)




export default route;