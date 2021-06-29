const mongoose = require("mongoose");
const QuestionSchema = require("./question.js");

const QuizSchema = {
  category: String,
  timed: Boolean,
  duration: Number, //in minutes
  questions: [QuestionSchema],
};

module.exports = QuizSchema;
