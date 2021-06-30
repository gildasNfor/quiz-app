const mongoose = require("mongoose");

const QuizSchema = {
  category: String,
  name: String,
  timed: Boolean,
  duration: Number, //in minutes
  questions: [],
};

module.exports = mongoose.model("Quiz", QuizSchema);
