import mongoose from 'mongoose'

let blogSchema=mongoose.Schema({
  
  title:{
    type:String,
    require:true
  },
  content:{
    type:String,
    require:true
  },
  photo:{
    data:Buffer,
    contentType:String
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    require:true
  }
})

export default mongoose.model("blog",blogSchema)