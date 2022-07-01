const kit = require("../models/kit");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    try
    {
    const dbr = await kit.find();
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.get("/category/:cname",async (req,res)=>{
    try
    {
    const dbr = await kit.find({"category.name":req.params.cname});
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.get("/kname/:kname",async (req,res)=>{
    try
    {
    const dbr = await kit.find({"name":req.params.kname});
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.post("/add", async (req, res) => {
    const newProduct = new kit(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports =router
