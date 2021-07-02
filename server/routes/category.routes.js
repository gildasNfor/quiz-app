const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/category.controllers");
const checkJWT = require("../middleware/auth.middleware.js");

router.use(checkJWT);

router
  .route("/")
  .get(categoryControllers.getCategories)
  .post(categoryControllers.addCategory);

router
  .route("/:id")
  .get(categoryControllers.getCategoryById)
  .put(categoryControllers.updateCategory)
  .delete(categoryControllers.deleteCategory);

module.exports = router;
