const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    googlebook_id: {type: String, default: "not chosen" },
    due_date: {type: Date, required: true},
    book_name: {type: String, default: "not chosen"},
    author: { type: String, default: "not chosen" },
    book_length: {type: Number, default: 0},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Assignment = mongoose.model("Assignment",  assignmentSchema);

module.exports = Assignment;