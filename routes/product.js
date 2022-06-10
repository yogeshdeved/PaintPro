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
router.get("/bycategoryid/:cid",async (req,res)=>{
    try
    {
    const dbr = await product.find({"category.id": "62a05974ed77be4f823c17b3"});
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
