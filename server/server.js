// jshint esversion:6

const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRoutes = require("./routes/category.routes");
const quizRoutes = require("./routes/quiz.routes");

mongoose.connect("mongodb://localhost:27017/quizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
