const { text } = require('body-parser');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: text, required: true},
    email: { type: text, required: true},
    password: { type: text, required: true},
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Todo", required: true
        }
    ]
});

module.exports = mongoose.model('User', userSchema);