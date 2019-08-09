const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({

    //book information for display
    book_name: {type: String},    
    authors: [String],
    description: String,
    img: {},
    link: {type: String},
    //book_length is here
    book_length: {type: Number , default: 0},

    //book viewer information to get the google book
    googlebook_id: {type: String, default: "not chosen" },

    //selected due date for assignment
    due_date: {type: Date, required: true},


    //created and updated information for assignment
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
module.exports = Assignment;

