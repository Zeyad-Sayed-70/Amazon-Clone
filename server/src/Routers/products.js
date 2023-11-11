const router = require("express").Router();
const {
  createProductsObject,
  fetchCategories,
  fetchProductsByCategory,
  fetchProductById,
  fetchProducts,
} = require("../Controllers/products");

router.route("/").post(createProductsObject).get(fetchProducts);
router.route("/category").get(fetchCategories);
router.route("/:id").get(fetchProductById);
router.route("/category/:category").get(fetchProductsByCategory);

module.exports = router;
