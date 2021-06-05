const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("todo");
});

router.post("/", (req, res) => {
  res.send("todo added");
});

module.exports = router;
