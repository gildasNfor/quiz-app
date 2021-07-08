// jshint esversion:6

const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const categoryRoutes = require("./routes/category.routes");
const quizRoutes = require("./routes/quiz.routes");
const authRoutes = require("./routes/auth.routes");
const evaluateRoutes = require("./routes/evaluate.routes");
const User = require("./models/user");
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

User.findOne({ username: "admin" })
  .then(admin => {
    if (admin) {
      return;
    }
    const administrator = new User({
      username: "admin",
      password: bcrypt.hashSync("admin1234", 10),
      isAdmin: true,
    });
    return administrator.save();
  })
  .catch(err => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
