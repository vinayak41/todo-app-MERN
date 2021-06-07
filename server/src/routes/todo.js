const express = require("express");
const {
  addTodo,
  deleteTodo,
  toggleDone,
  fetchAllTodos,
} = require("../controllers/todo");
const router = express.Router();

router.get("/", fetchAllTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/", toggleDone);

module.exports = router;
