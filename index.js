const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const app=express();

const deviceBrandRoute=require("./routes/devicebrand");
const deviceRoute=require("./routes/device");
const productTypeRoute=require("./routes/productType");
const categoryRoute=require("./routes/category");
const bannerRoute=require("./routes/banner");

const mongoose=require("mongoose");
const dburl=process.env.MONGO_URL

const cors = require("cors");

const parameter={
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
    };
mongoose.connect(dburl).then(()=>console.log("Database connected")).catch((e)=>{
    console.log("Error occured",e)
});

app.use(cors());
app.use(express.json());
app.use("/api/v1/devicebrand",deviceBrandRoute);
app.use("/api/v1/device",deviceRoute);
app.use("/api/v1/producttype",productTypeRoute);
app.use("/api/v1/category",categoryRoute);
app.use("/api/v1/banner",bannerRoute);

app.listen(process.env.PORT_NO || 5000,()=>{
    console.log("Backend is running");
})