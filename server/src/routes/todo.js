const express = require("express");
const { addTodo, deleteTodo, toggleDone } = require("../controllers/todo");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("todo");
});

router.post("/", addTodo);
router.delete('/', deleteTodo);
router.put('/', toggleDone);

module.exports = router;
