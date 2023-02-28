const mongoose = require('mongoose');


const Receipe = mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     author:{
        type:String,
        required:true
     },
     image:{
        url:{
            type:String,
            required:true
        }
     },
     ingredients:{
        type:Array,
        required:true
     },
     directions:{
        type:String,
        required:true
     }
},{ timestamps: true });



module.exports=mongoose.model("Receipe", Receipe);