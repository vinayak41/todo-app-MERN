const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Todo", required: true
        }
    ]
});

module.exports = mongoose.model('User', userSchema);