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

    // const products = await Products.find({})
    //   .limit(limit || 0)
    //   .skip(skip || 0)
    //   .select(select?.split(",").length > 0 ? select.split(",") : "");
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products.length === 0)
          return res.status(400).json({ msg: "No products found" });

        res.status(201).json({
          msg: "Products fetched successfully",
          products: data.products,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { id } = req.params;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return res.status(400).json({ msg: "No product found" });

        res
          .status(201)
          .json({ msg: "Products fetched successfully", product: data });
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    // const products = await Products.find({ category });

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products.length === 0)
          return res.status(400).json({ msg: "No products found" });

        res.status(201).json({
          msg: "Products fetched successfully",
          products: data.products,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchCategories = async (req, res) => {
  try {
    // const data = await Categories.find();
    // const { categories } = data[0];
    // res
    //   .status(201)
    //   .json({ msg: "Categories fetched successfully", categories });
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length === 0)
          return res.status(400).json({ msg: "No Categories found" });

        res
          .status(201)
          .json({ msg: "Categories fetched successfully", categories: data });
      });
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
