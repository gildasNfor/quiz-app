const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSignUp = (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (!user) {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        isAdmin: false,
      });
      newUser.save();
      return res.status(201).json({
        user: { username: newUser.username, isAdmin: newUser.isAdmin },
      });
    }
    return res.status(409).json({
      message:
        "A user with thesame username already exist. Enter a different username ",
    });
  });
};

const userLogin = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) console.log(err);
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user._id,
              username: user.username,
            },
            "just-for-testing",
            {
              expiresIn: "1d",
            }
          );

          return res.status(200).json({
            message: "Auth successful",
            userDetails: {
              userId: user._id,
              username: user.username,
              isAdmin: user.isAdmin,
            },
            jwtToken: token,
          });
        }
        res.status(401).json({
          message:
            "Auth failed. Make sure you entered the correct username and password",
        });
      });
    }
  });
};

const getUser = (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const authorization = req.headers.authorization.split(" ")[1];

    jwt.verify(authorization, "just-for-testing", (err, foundUser) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(foundUser);
      User.findOne({ _id: foundUser.userId })
        .then(user => {
          if (user) {
            const currentUser = {
              username: user.username,
              isAdmin: user.isAdmin,
              userId: user._id,
            };
            return res.status(200).json(currentUser);
          }
          return res.sendStatus(404);
        })
        .catch(err => {
          console.log(err);
        });
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getUser,
};
