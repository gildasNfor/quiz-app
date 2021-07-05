const Quiz = require("../models/quiz.js");

const evaluateQuiz = (req, res) => {
  Quiz.findOne({ _id: req.params.id }).then(quiz => {
    if (quiz) {
      const markingGuide = [];
      const userAnswers = req.body.answers;
      let score = 0;
      quiz.questions.forEach(question => {
        markingGuide.push(question.correctAnswers);
      });

      userAnswers.map((answer, index) => {
        markingGuide[index].indexOf(answer) !== -1 ? score++ : null;
      });

      return res.status(200).json({ result: score });
    }

    return res.json({ message: "Something went wrong" });
  });
};

module.exports = {
  evaluateQuiz,
};
