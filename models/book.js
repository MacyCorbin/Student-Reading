const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googlebook_id: {type: String, default: "not chosen" },
  student_id: {type: String, required: true },
  assignment_id: {type: String, required: true},
  student_name: { type: String, required: true },
  book_name: {type: String, default: "not chosen"},
  author: { type: String, default: "not chosen" },
  on_page: {type: Number, default: 0},
  pages_read: {type: Number, default: 0},
  book_length: {type: Number, default: 0},
  due_date: {type: Date, required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
