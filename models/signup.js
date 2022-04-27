import mongoose from "mongoose";

const Schema = mongoose.Schema;

//defining schema

const signupSchema = new Schema({

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
   },

   dateofBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String, // Male/Female
   required: true
},



});
//Define the model for user
var User;
if(mongoose.models.Signup)
    Signup = mongoose.model('Signup');
else
    Signup = mongoose.model('Signup', SignupSchema);

//Export the User Model
// module.exports = signup;
module.exports = mongoose.model('Signup',signupSchema);