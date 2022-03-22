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

const userSchema = new Schema({
    name: String,
    email: String
});

module.exports = {
    Bug: mongoose.model('Bug', bugSchema),
    User: mongoose.model('User', userSchema),
};