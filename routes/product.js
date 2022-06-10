const product = require("../models/product");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    try
    {
    const dbr = await product.find();
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.get("/products/:cid",async (req,res)=>{
    try
    {
    const dbr = await product.find({category {id : req.params.cid}});
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.post("/add", async (req, res) => {
    const newProduct = new product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports =router
