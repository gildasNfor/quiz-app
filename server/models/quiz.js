const mongoose = require("mongoose");
const category = require("./category.js");
const categorySchema = category.categorySchema;

const QuizSchema = {
  category: categorySchema,
  timed: Boolean,
  duration: Number, //in minutes
  questions: [],
};

module.exports = mongoose.model("Quiz", QuizSchema);
