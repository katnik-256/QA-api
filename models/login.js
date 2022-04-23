import mongoose from "mongoose";

const Schema = mongoose.Schema;

//defining schema


const loginSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type:string,
        required:true,
    }
});
module.exports = mongoose.model('Login',loginSchema);