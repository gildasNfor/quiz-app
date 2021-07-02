const mongoose = require("mongoose");

const userSchema = {
  username: String,
  password: String,
  isAdmin: Boolean,
};

module.exports = mongoose.model("User", userSchema);
