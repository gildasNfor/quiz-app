const mongoose = require("mongoose");

const categorySchema = {
  name: String,
};

exports.categorySchema = categorySchema;
exports.Category = mongoose.model("Category", categorySchema);
