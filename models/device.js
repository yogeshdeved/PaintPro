const mongoose=require("mongoose");
const device=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    status : {type:Boolean, required:true, default:true},
    rank_order : {type:Number, required:true},
    url : {type:String, required:true, unique:true},
    image : {type:String, required:true},
    updated_on : {type:String, required:true, default:Date.now},
    created_on : {type:String, required:true, default:Date.now},
    is_deleted : {type:Boolean, required:true,default:false},
    brand:{
        name:{type:String, required:true},
        url:{type:String, required:true}
    },
    color:[{name:String,image:String}],
    type:{
        name:{type:String}
    },
    listing_image:{type:String}
})
module.exports=mongoose.model("Device",device);
