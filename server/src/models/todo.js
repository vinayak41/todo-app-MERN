const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id: { type: Number, required: true},
    text: { type: String, required: true},
    isDone: { type: Boolean, required: true, default: false},
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = mongoose.model('Todo', todoSchema);