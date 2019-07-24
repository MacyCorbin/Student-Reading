const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a new schema for Student data
const studentSchema = new Schema({
  name: { type: String, required: true},
  
});

const students = mongoose.model("Book", studentSchema);

module.exports = students;