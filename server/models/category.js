const mongoose = require("mongoose");

const categorySchema = {
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
};

module.exports = mongoose.model("Category", categorySchema);
