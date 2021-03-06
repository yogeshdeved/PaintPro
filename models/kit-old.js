const mongoose=require("mongoose");
const kitold=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    description : {type:String, required:false, unique:false},
    kittype: {type:String, required:false,unique:false},
    parent : {type:String, required:false, unique:false, default:''},
    status : {type:Boolean, required:true, default:false},
    rank_order : {type:Number, required:false},
    url : {type:String, required:false, unique:false},
    
    updated_on : {type:String, required:true, default:Date.now},
    created_on : {type:String, required:true, default:Date.now},
    is_deleted : {type:Boolean, required:true, default:false}
})
module.exports=mongoose.model("Kitold",kitold);
