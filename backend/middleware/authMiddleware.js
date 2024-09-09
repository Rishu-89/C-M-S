import jwt from 'jsonwebtoken'
 export let isLogin=(req,res,next)=>{

  try {
   
    let decode= jwt.verify(req.headers.authorization,"kjhgfds");
    if(decode){
 
      req.user=decode;
      next();
    }
    else{
     return res.send({
             message:"Login required",
             success:false
      })
    }


  } catch (error) {
    console.log(error)
    console.log("error here")
  }   

}