const express = require('express');
const { requireLogin } = require('../controllers/common-middlewares');
const router = express.Router();
const {signup, login, getUser} = require('../controllers/user')

router.post("/signup", signup);
router.post("/login", login);
router.get("/", requireLogin, getUser);


module.exports = router;