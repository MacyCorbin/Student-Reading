const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    img: {type: {String}, },
    link: {type: String,},
    googlebook_id: {type: String, default: "not chosen" },
    book_name: {type: String},    
    on_page: {type: Number, default: 0},
    pages_read: {type: Number, default: 0},
    book_length: {type: Number , default: 0},
    due_date: {type: Date, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
  
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
module.exports = Assignment;

