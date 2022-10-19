const express=require("express");
const router=express.Router();

const Book = require("../models/Book")

router.get("/",async(req,res,next)=>{
    let books;
    try{
        console.log("hy")
        books=await Book.find();
    }catch(e){
        console.log(e);
    }
    if(!books){
        return res.status(404).json({message:"NOT FOUND"});
    }
    else{
        return res.status(200).json({books});
    }
})
module.exports = router;