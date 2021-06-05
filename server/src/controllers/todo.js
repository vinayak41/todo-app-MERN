const Todo = require('../models/todo')

exports.addTodo = (req, res) => {
    const newTodo = new Todo({
        id: req.body.id,
        text: req.body.text
    });

    newTodo.save((error, todo) => {
        if(error)  res.json({ error });
        if(todo) res.json( { todo: todo});
    })
}
