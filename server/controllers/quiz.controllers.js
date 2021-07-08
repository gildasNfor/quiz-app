const Quiz = require("../models/quiz.js");

const getQuizes = (req, res) => {
  Quiz.find({}, (err, list) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    } else {
      res.status(200).json(list);
    }
  });
};

const addQuiz = (req, res) => {
  Quiz.findOne({ name: req.body.name }, (err, found) => {
    if (err) console.log(err);

    if (!found) {
      const newQuiz = new Quiz({
        category: req.body.category
          ? req.body.category.toLowerCase()
          : "uncategoriesd",
        name: req.body.name,
        timed: req.body.timed,
        duration: req.body.duration,
        questions: [],
      });
      newQuiz.save();
      res.status(201).json({ newQuiz, message: "Successful" });
    } else {
      res
        .status(409)
        .json({ found, message: "A quiz with the same name already exist" });
    }
  });
};

const updateQuiz = (req, res) => {
  Quiz.findOne({ _id: req.params.id }, (err, found) => {
    Quiz.findByIdAndUpdate(
      { _id: req.params.id },
      {
        questions: req.body.newQuestion && [
          ...found.questions,
          req.body.newQuestion,
        ],
      },
      function (err) {
        err
          ? console.log(err)
          : res.status(200).json({ message: "Successfully Updated" });
      }
    );
  });
};

const deleteQuiz = (req, res) => {
  Quiz.findByIdAndRemove({ _id: req.params.id }, err => {
    err
      ? console.log(err)
      : res.status(200).json({ message: "Successfully deleted" });
  });
};

const getQuizById = (req, res) => {
  Quiz.findOne({ _id: req.params.id })
    .then(quiz => {
      return res.status(200).json(quiz);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getQuizes,
  addQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizById,
};
