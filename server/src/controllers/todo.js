const Todo = require("../models/todo");

exports.addTodo = (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    author: req.userId
    
  });

  newTodo.save((error, todo) => {
    if (error) res.json({ error });
    if (todo) res.json({_id: todo._id});
  });
};

exports.deleteTodo = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.id }).exec((error, todo) => {
    if(error) res.json({error: error});
    if(todo) res.json({message: todo});
  })
};

exports.toggleDone = (req, res) => {
  Todo.findOne({ _id: req.body.id }).exec((error, todo) => {
    if (error) res.json({ error: error });
    if (todo) {
      if (todo.isDone == true) {
        Todo.updateOne({ _id: req.body.id }, { $set: { isDone: false } }).exec(
          (error, data) => {
            if (error) res.json({ error: error });
            if (data) res.json(data);
          }
        );
      } else {
        Todo.updateOne({ _id: req.body.id }, { $set: { isDone: true } }).exec(
          (error, data) => {
            if (error) res.json({ error: error });
            if (data) res.json(data);
          }
        );
      }
    }
  });
};

exports.fetchAllTodos = (req, res) => {
  Todo.find({author: req.userId }).exec((error, todos) => {
    if (error) res.json({ error });
    if (todos) res.json({ todos });
  });
};
