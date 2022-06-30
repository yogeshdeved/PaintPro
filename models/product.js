const mongoose=require("mongoose");
const designCategory=new mongoose.Schema({
    name:{type:String,required:true},
    rank_order:{type:Number,required:true},
    status:{type:Boolean,required:true}
})
const design=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    sachet:{type:String,required:true},
    category:{type:designCategory},
    rank_order:{type:Number,required:true},
    status:{type:Boolean,required:true}
})

const component=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    description : {type:String, required:false, unique:false},
    componenttype: {type:String, required:false,unique:false},
    url : {type:String, required:false, unique:false},
})
const product=new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    sku: {type:String, required:true, unique:true},
    status : {type:Boolean, required:true, default:false},
    rank_order : {type:Number, required:true},
    url : {type:String, required:true, unique:true},
    category:{
        name:{type:String},
        ctype:{type:String},
        region:{type:String},
        type:{type:String},
        makeyear:{type:String},
        url:{type:String}
    },
    kit:[{{type:String, required:false}, type:component}],
    stock:{type:Number,required:true},
    hsn_code:{type:String},

    updated_on : {type:String, required:true, default:Date.now},
    created_on : {type:String, required:true, default:Date.now},
    is_deleted : {type:Boolean, required:true},
    skins:[{type:design,name:{type:String,required:true},price:{type:Number,required:true}}],
    description:{type:String} //html
})
module.exports=mongoose.model("Product",product);
