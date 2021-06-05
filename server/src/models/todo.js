const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id: { type: Number, require: true},
    text: { type: String, require: true},
    isDone: { type: Boolean, require: true, default: false}
})

module.exports = mongoose.model('Todo', todoSchema);