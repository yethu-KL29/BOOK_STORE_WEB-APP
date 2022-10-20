

const Book=require("../models/Book");
//1
const getAllBooks =async(req,res,next)=>{
    let books;
    try{
      
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
}
//2

const getById=async(req,res,next)=>{
    const id = req.params.id;
    let book;
   try{
     book = await Book.findById(id);
   }catch(e){
       console.log(e);
   }
   if(!book){
    return res.status(404).json({message:"NOT FOUND THE ID"});
}
else{
    return res.status(200).json({book});
}
}

//3

const Update=async(req,res,next)=>{
    const id = req.params.id;
    const{name,author,description,price,avail,image} = req.body;
    let book;
  
    try {
        book=await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            avail,
            image
        })
        book = await book.save();
    } catch (e) {
        console.log(e);
    }
    if(!book){
        return res.status(404).json({message:"NOT FOUND THE UPDATE"});
    }
    else{
        return res.status(200).json({book});
    }
}



//4
const addBook=async(req,res,next)=>{
    let book;

   try{
    const{name,author,description,price,avail,image} = req.body;
    book = new Book({
        name,
        author,
        description,
        price,
        avail,
        image,
        
    })
    await book.save();
   }catch(e){
    console.log(e);
   }
   if(!book){
    return res.status(500).json({message:"NOT ADDED"});
}
else{
    return res.status(201).json({book});
}
}
//5

const Delete=async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
        await book.save();
    } catch (e) {
        console.log(e)
    }
    if(!book){
        return res.status(500).json({message:"NOT DELETED"});
    }
    else{
        return res.status(201).json({book});
    }
}



exports.addBook=addBook;
exports.getAllBooks = getAllBooks;
exports.getById=getById;
exports.Update=Update;
exports.Delete=Delete;
