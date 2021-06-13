const express = require("express");
const {
  addTodo,
  deleteTodo,
  toggleDone,
  fetchAllTodos,
} = require("../controllers/todo");
const {requireLogin} = require("../controllers/common-middlewares");
const router = express.Router();

router.get("/", requireLogin, fetchAllTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/", toggleDone);

module.exports = router;
