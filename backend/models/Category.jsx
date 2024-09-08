import mongoose from 'mongoose'

let categoryModel=mongoose.Schema({
  name:{
    type:String,
    require:true
  },

})

export default mongoose.model('category',categoryModel);
