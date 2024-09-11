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
      let blog=await blogSchema.findOne({_id:id}).populate('author', 'name');

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



export const getHomePageBlog=async(req,res)=>{
  try {
   

    
    const blogs = await blogSchema.find({}).select("-photo").populate('author', 'name') 

     
   return res.status(200).send({
      blogs
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching blogs', error });
  }

}


export const getPhoto=async(req,res)=>{
 
 try {
  let blog=await blogSchema.findById(req.params.id).select("photo");

  if(blog.photo.data){
    res.set("Content-Type",blog.photo.contentType);
    return res.status(200).send(blog.photo.data)
    
  }
  
 } catch (error) {
  console.log(error)
  return res.status(500).send(
    {
      message:"Error while getting message",
      success:false
    }
  )
 }


   
}



export const searchPriductController=async(req,res)=>{
  try {
    let keyword=req.params.search;

    let blogs=await blogSchema.find({
      
     $or: [
             {title :{$regex:keyword , $options:"i"}},
             {content :{$regex:keyword, $options:"i"}},
            //  {author :{$regex:keyword, $options:"i"} }
      ]

    }).select("-photo")

return res.json(blogs);
    
  } catch (error) {
    console.log(error)
  }
}