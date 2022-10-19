const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    avail:{
        type:Boolean,
        require:true
    },
})
module.exports =mongoose.model("Books",bookSchema);
