const Category = require("../models/category.js");
const Quiz = require("../models/quiz.js");

const getCategories = async (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(categories);
    }
  });
};

const addCategory = async (req, res) => {
  Category.findOne({ name: req.body.name }, (err, found) => {
    if (err) console.log(err);
    if (!found) {
      const newCategory = new Category({
        name: req.body.name,
      });
      newCategory.save();
      res.status(201).json({
        message: "Successful",
      });
    } else {
      res.status(409).json({ message: "This Category allready exist" });
    }
  });
};

const updateCategory = async (req, res) => {
  Category.findByIdAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    function (err) {
      err
        ? console.log(err)
        : res.status(200).json({ message: "Successfully Updated" });
    }
  );
};

const deleteCategory = async (req, res) => {
  Category.findOne({ _id: req.params.id }, (err, found) => {
    console.log(found);
    Quiz.find({ category: found.name }, (err, quizzes) => {
      if (err) {
        console.log(err);
      } else {
        console.log(quizzes);
        quizzes.forEach(quiz => {
          quiz.category = "uncategorised";
          quiz.save();
        });
        Category.findByIdAndRemove({ _id: req.params.id }, err => {
          err
            ? console.log(err)
            : res.status(200).json({ message: "Successfully deleted" });
        });
      }
    });
  });
};

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
