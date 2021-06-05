const express = require("express");
const { addTodo } = require("../controllers/todo");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("todo");
});

router.post("/", addTodo);

module.exports = router;
