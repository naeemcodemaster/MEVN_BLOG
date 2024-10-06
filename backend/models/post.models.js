const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    slug:{
        type:String,
        unique:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true,
})

const model = mongoose.model("post",Schema);
module.exports = model;