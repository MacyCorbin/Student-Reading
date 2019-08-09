const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignment1Schema = new Schema({
    googlebook_id: String,
    due_date: {type: Date, required: true},
    book_name: {type: String, default: "not chosen"},
    authors: [String],
    book_length: {type: Number, default: 0},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Assignment1 = mongoose.model("Assignment1",  assignment1Schema);

module.exports = Assignment1;