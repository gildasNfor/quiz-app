// jshint esversion:6

const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QuizSchema = require("./models/quiz.js");
const QuestionSchema = require("./models/question.js");

mongoose.connect("mongodb://localhost:27017/quizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

const Question = mongoose.model("Question", QuestionSchema);
const Year1 = mongoose.model("Year1", QuizSchema);
const Year2 = mongoose.model("Year2", QuizSchema);
const Year3 = mongoose.model("Year3", QuizSchema);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
