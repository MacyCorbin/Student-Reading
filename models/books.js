const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a new schema for book data
const bookSchema = new Schema({
  author: { type: String, required: true},
  description: String,
  image: String,
  link: String,
  title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;