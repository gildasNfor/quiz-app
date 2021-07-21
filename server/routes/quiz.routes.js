const express = require("express");
const router = express.Router();
const quizControllers = require("../controllers/quiz.controllers");
const checkJWT = require("../middleware/auth.middleware.js");

router.use(checkJWT);

router.route("/").get(quizControllers.getQuizes).post(quizControllers.addQuiz);
router
  .route("/:id")
  .get(quizControllers.getQuizById)
  .put(quizControllers.updateQuiz)
  .delete(quizControllers.deleteQuiz);

module.exports = router;
