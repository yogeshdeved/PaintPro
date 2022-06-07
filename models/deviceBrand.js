const mongoose=require("mongoose");
const deviceBrandSchema=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    image : {type:String, required:true},
    status : {type:Boolean, required:true},
    rank_order : {type:Number, required:true},
})
module.exports=mongoose.model("DeviceBrands",deviceBrandSchema);