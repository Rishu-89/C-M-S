import express from 'express'
import { createBlogController, deleteBlog, editController, getAllBlogController, getSingleBlogController } from '../controlers/blogController.js';
import { isLogin } from '../middleware/authMiddleware.js';
import formidableMiddleware from 'express-formidable'

let route=express.Router();

route.post('/create-blog',isLogin,formidableMiddleware(),createBlogController)

route.get('/allBlogs',isLogin, getAllBlogController);

route.get('/singleBlogs/:id', getSingleBlogController);

route.put('/update-blog/:id',isLogin,formidableMiddleware(),editController)

route.delete('/delete-blog/:id',deleteBlog)

export default route;