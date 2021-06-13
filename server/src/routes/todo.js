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
router.post("/",requireLogin, addTodo);
router.delete("/:id",requireLogin, deleteTodo);
router.put("/",requireLogin, toggleDone);

module.exports = router;
