const mongoose = require("mongoose");

const QuizSchema = {
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  timed: {
    type: Boolean,
  },
  duration: {
    type: Number,
  },
  questions: [],
};

module.exports = mongoose.model("Quiz", QuizSchema);
