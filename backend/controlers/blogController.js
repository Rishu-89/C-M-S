import blogSchema from "../models/blog.js";
import fs from 'fs'


export let createBlogController=async(req,res)=>{

  try {
    let {title,content}= req.fields;
  let {photo}=  req.files;
  if(!title && !content ){
    return res.send({
      success:false,
      message:"Title Content are requird"
    })
  }

  let author=req.user.id

  let blog = new  blogSchema({...req.fields,author});
if(photo){
  blog.photo.data=fs.readFileSync(photo.path)
  blog.photo.contentType=photo.type;
}
await blog.save();

return res.status(201).send({
  success:true,
  message:"Blog created Sucessfully",
  blog
})

  }
   catch (error) {
    console.log(error)
    return res.status(500).send({
      message:"Error in creating product",
      success:false
    })
  }

}