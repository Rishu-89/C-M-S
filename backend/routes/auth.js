import exppress from 'express'
import { registerController,loginController } from '../controlers/authController.js';

let route=exppress.Router();

route.post("/register",registerController);

route.post("/login",loginController);


export default route;