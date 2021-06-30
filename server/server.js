// jshint esversion:6

const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Quiz = require("./models/quiz.js");
const Category = require("./models/category.js");

mongoose.connect("mongodb://localhost:27017/quizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/categories", (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      console.log(err);
    } else {
      res.json(categories);
    }
  });
});

app.post("/categories", (req, res) => {
  Category.findOne({ name: req.body.name }, (err, found) => {
    if (err) console.log(err);
    if (!found) {
      const newCategory = new Category({
        name: req.body.name,
      });
      newCategory.save();
    } else {
      res.json({ message: "This Category allready exist" });
    }
  });
});

app.put("/categories/:id", (req, res) => {
  Category.findByIdAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    function (err) {
      err ? console.log(err) : res.json({ message: "Successfully Updated" });
    }
  );
});

app.delete("/categories/:id", (req, res) => {
  Category.findByIdAndRemove({ _id: req.params.id }, err => {
    err ? console.log(err) : res.json({ message: "Successfully deleted" });
  });
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
