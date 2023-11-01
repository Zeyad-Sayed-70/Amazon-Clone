const Products = require("../Models/products");
const Categories = require("../Models/categories");

const createProductsObject = async (req, res) => {
  try {
    const { products } = req.body;

    if (products && products.length === 0)
      return res.status(400).json({ msg: "Please add at least one product" });

    for (let product of products) await Products.create(product);

    res.status(201).json({ msg: "Products added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const fetchProducts = async (req, res) => {
  try {
    const { limit, select, skip } = req.query;
    console.log(select?.split(","));
    const products = await Products.find({})
      .limit(limit || 0)
      .skip(skip || 0)
      .select(select?.split(",").length > 0 ? select.split(",") : "");

    res.status(201).json({ msg: "Products fetched successfully", products });
  } catch (error) {
    console.log(error);
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findOne({ id });

    res.status(201).json({ msg: "Product fetched successfully", product });
  } catch (error) {
    console.log(error);
  }
};

const fetchProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    console.log(category);

    const products = await Products.find({ category });

    res.status(201).json({ msg: "Products fetched successfully", products });
  } catch (error) {
    console.log(error);
  }
};

const fetchCategories = async (req, res) => {
  try {
    const data = await Categories.find();
    const { categories } = data[0];
    res
      .status(201)
      .json({ msg: "Categories fetched successfully", categories });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductsObject,
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
  fetchCategories,
};
