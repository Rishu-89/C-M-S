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


export const getAllBlogController=async(req,res)=>{
  
  try {
    let id=req.user.id;

  let blogs=await blogSchema.find({author:id}).select("-photo");

  if(blogs){
    return res.status(201).send({
        success:true,
        blogs
    })
   
  }
  else{
     return res.send({
             message:"No Blog found",
             success:false
      })
  }
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message:"Error in Fetching blogs",
      success:false
    })
  }

} 


export const getSingleBlogController=async(req,res)=>{
    try {
      let id=req.params.id;
      let blog=await blogSchema.findOne({_id:id});

      return res.status(201).send({
        blog,
        success:true
      })

    } catch (error) {
      
    }
}


export const editController=async(req,res)=>{
   try {

    let {title,content}= req.fields;
    let {photo}=  req.files;
   
    if(!title && !content ){
      return res.send({
        success:false,
        message:"Title Content are requird"
      })
    }
    let id=req.params.id;
   let blog= await blogSchema.findByIdAndUpdate(id,{...req.fields},{new:true});

    if(photo){
      blog.photo.data=fs.readFileSync(photo.path)
      blog.photo.contentType=photo.type;
    }
    await blog.save();

    return res.status(201).send({
      success:true,
      message:"Blog updated sucessfully"
    })
   } catch (error) {
    console.log(error)
    return res.status(500).send({
      message:"Error in edit blog",
      success:false
    })
   }
}




export const deleteBlog=async(req,res)=>{
  try {
    let id=req.params.id;
     await blogSchema.findByIdAndDelete({_id:id});
     return res.status(201).send({
      success:"True",
      message:"Blog deleted sucessfully "
     })
  } catch (error) {
    return res.status(500).send({
      success:false,
      message:"Error in deleting blog"
    })
  }
}