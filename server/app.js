const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const router = require("./routes/bookroute")

app.use(express.json());
app.use("/books",router);
app.use(cors());

mongoose.connect("mongodb+srv://Admin:pass123@cluster0.xo84jx6.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(()=>console.log("connected"))
.then(()=>{
    app.listen(5000);
})
.catch((error)=>console.log(error));
