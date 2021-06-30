const express = require("express");
const router = express.Router();
const quizControllers = require("../controllers/quiz.controllers");

router.route("/").get(quizControllers.getQuizes).post(quizControllers.addQuiz);
router
  .route("/:id")
  .put(quizControllers.updateQuiz)
  .delete(quizControllers.deleteQuiz);

module.exports = router;
