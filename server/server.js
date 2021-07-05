// jshint esversion:6

const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRoutes = require("./routes/category.routes");
const quizRoutes = require("./routes/quiz.routes");
const authRoutes = require("./routes/auth.routes");
const evaluateRoutes = require("./routes/evaluate.routes");
mongoose.connect("mongodb://localhost:27017/quizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/quiz", quizRoutes);
app.use("/auth", authRoutes);
app.use("/evaluate", evaluateRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
