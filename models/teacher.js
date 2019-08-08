const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    google_id: {type: Number, required: true},
    name: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;