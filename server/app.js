const express=require("express");
const mongoose=require("mongoose");
const app=express();
const router = require("./routes/bookroute")
app.use(express.json());
app.use("/books",router);

mongoose.connect("mongodb+srv://Admin:pass123@cluster0.xo84jx6.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(()=>console.log("connected"))
.then(()=>{
    app.listen(5000);
})
.catch((error)=>console.log(error));
