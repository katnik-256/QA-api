import mongoose from "mongoose";

const Schema = mongoose.Schema;

//defining schema
const viewSchema = newSchema({
    viewAnswer:{
        type: String,
        required: true
    },

    acceptAnswer:{
        type: String,
        required: true
    },

});
module.exports = mongoose.model('View',viewSchema);