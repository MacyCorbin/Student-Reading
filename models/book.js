const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  //student information, who the book belongs to
  student_id: {type: String, required: true },
  student_name: { type: String, required: true },

  //assignment information, which assignment this book is for
  assignment_id: {type: String, required: true},

  //book information for display results
  book_name: {type: String},    
  authors: [String],
  description: String,
  img: {},
  link: {type: String},

  //book viewer information
  googlebook_id: {type: String, default: "not chosen" },
  on_page: {type: Schema.Types.Mixed, default: 0},

  //completion information, book_length is here
  pages_read: {type: Number, default: 0},
  book_length: {type: Number, default: 0},
  due_date: {type: Date, required: true},


  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
