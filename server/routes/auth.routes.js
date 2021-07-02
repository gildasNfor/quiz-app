const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controllers");

router.post("/signup", authControllers.userSignUp);
router.post("/login", authControllers.userLogin);

module.exports = router;
