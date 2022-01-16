const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bugSchema = new Schema({
    short: String,
    description: String,
    reporter: String,
    date: Date,
    status: String,
    assignedTo: String,
    severity: String,
});

module.exports = mongoose.model('Bug', bugSchema);