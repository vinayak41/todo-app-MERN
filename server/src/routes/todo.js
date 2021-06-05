const express = require("express");
const { addTodo, deleteTodo } = require("../controllers/todo");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("todo");
});

router.post("/", addTodo);
router.delete('/', deleteTodo);

module.exports = router;
