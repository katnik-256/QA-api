import mongoose from "mongoose";

const Schema = mongoose.Schema;

//defining schema
const questionSchema = newSchema({
    postquestion:{
        type: String,
        required: true
    },

    amswerquestion:{
        type: String,
        required: true
    },

});
module.exports = mongoose.model('View',viewSchema);