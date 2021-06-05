const express = require("express");
const { addTodo, deleteTodo, toggleDone, fetchAllTodos } = require("../controllers/todo");
const router = express.Router();

router.get("/", fetchAllTodos);
router.post("/", addTodo);
router.delete('/', deleteTodo);
router.put('/', toggleDone);

module.exports = router;
