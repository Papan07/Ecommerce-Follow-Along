const mongoose=required('mongoose');
const schema=mongoose.Schema({
    title:{required:true,trim:true,type:String},
    description:{required:true,trim:true,type:String},
    price:{required:true,type:Number},
    images:{type:[String],required:true},
    createdAt:{type:Date,default:Date.now},
})

const productModel=mongoose.model('Product',schema);
module.exports=productModel;