const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    lexile: {type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;