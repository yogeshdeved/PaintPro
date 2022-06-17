const category = require("../models/productCategory");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    try
    {
    const dbr = await category.find({"ctype":"Category"});
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.get("/:pid",async (req,res)=>{
    try
    {
    const dbr = await category.find({"ctype":req.params.pid});
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.post("/add", async (req, res) => {
    const newProduct = new category(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports =router
