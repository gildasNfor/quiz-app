const express = require("express");
const router = express.Router();
const evaluateControllers = require("../controllers/evaluate.controllers");
const checkJWT = require("../middleware/auth.middleware.js");

router.use(checkJWT);

router.route("/:id").post(evaluateControllers.evaluateQuiz);

module.exports = router;
