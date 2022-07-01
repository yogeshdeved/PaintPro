const mongoose=require("mongoose");
const kit=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    sku: {type:String, required:true, unique:true},
    status : {type:Boolean, required:true, default:false},
    rank_order : {type:Number, required:true},
    url : {type:String, required:false, unique:false},
    category:{
        name:{type:String}, // link to lowest level of model (model/sub model)
        ctype:{type:String}, // model / submodel
        region:{type:String},
        type:{type:String},
        makeyear:{type:String},
        url:{type:String}
    },
    component:{
        name : {type:String, required:true, unique:true},
        description : {type:String, required:false, unique:false},
        componenttype: {type:String, required:false,unique:false},
        url : {type:String, required:false, unique:false}
    },
    stock:{type:Number,required:true},
    updated_on : {type:String, required:true, default:Date.now},
    created_on : {type:String, required:true, default:Date.now},
    is_deleted : {type:Boolean, required:false, default:false},
    description:{type:String} //html
})
module.exports=mongoose.model("Kit",kit);
