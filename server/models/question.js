const mongoose = require("mongoose");

const QuestionSchema = {
  question: String,
  answers: Array,
  correctAnswer: Array,
};

module.exports = QuestionSchema;
