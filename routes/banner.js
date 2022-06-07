const banner = require("../models/bannerMaster");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    try
    {
    const dbr = await banner.find();
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
router.post("/add", async (req, res) => {
    const newProduct = new banner(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports =router