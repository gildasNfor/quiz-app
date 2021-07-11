const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controllers");

router.post("/signup", authControllers.userSignUp);
router.post("/login", authControllers.userLogin);
router.get("/get-user", authControllers.getUser);

module.exports = router;
