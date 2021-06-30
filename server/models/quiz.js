const mongoose = require("mongoose");

const QuizSchema = {
  category: String,
  timed: Boolean,
  duration: Number, //in minutes
  questions: [],
};

module.exports = mongoose.model("Quiz", QuizSchema);
