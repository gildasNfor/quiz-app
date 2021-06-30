const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/category.controllers");

router
  .route("/")
  .get(categoryControllers.getCategories)
  .post(categoryControllers.addCategory);

router
  .route("/:id")
  .put(categoryControllers.updateCategory)
  .delete(categoryControllers.deleteCategory);

module.exports = router;
