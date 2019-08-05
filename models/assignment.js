const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    due_date: {type: Date, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Assignment = mongoose.model("Assignment",  assignmentSchema);

module.exports = Assignment;