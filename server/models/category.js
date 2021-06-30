const mongoose = require("mongoose");

const categorySchema = {
  name: String,
};

module.exports = mongoose.model("Category", categorySchema);
