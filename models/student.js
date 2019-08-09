const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    google_id: {type: Number, required: true},
    name: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;