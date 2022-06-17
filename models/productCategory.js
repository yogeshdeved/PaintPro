const mongoose=require("mongoose");
const productCategory=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    description : {type:String, required:false, unique:false},
    parent : {type:string, required:true, unique:false, default:''},
    status : {type:Boolean, required:true, default:false},
    rank_order : {type:Number, required:true},
    url : {type:String, required:true, unique:true},
    
    updated_on : {type:String, required:true, default:Date.now},
    created_on : {type:String, required:true, default:Date.now},
    is_deleted : {type:Boolean, required:true, default:false},
    banner:{
        title:{type:String, required:true},
        image:{type:String, required:true}
    }
})
module.exports=mongoose.model("ProductCategory",productCategory);
