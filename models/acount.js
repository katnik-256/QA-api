import mongoose from "mongoose";

const Schema = mongoose.Schema;

//defining schema

const acountSchema = new Schema({

   firstname:{
        type:String,
        required: true
    },

    lasttname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },

    password:{
        type: String,
        required: true
   },

   confirmPassword:{
       type: String,
       required: true
   }



});
module.exports = mongoose.model('Acount',acountSchema);