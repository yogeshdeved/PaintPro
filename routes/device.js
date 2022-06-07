const device = require("../models/device");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    try
    {
    const dbr = await device.find();
    res.status(200).json(dbr);
    }
    catch(error)
    {
        res.status(500,json({message:error}))
    }
})
//CREATE

router.post("/add", async (req, res) => {
    const newProduct = new device(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports =router