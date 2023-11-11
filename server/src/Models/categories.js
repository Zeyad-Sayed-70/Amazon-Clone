const { Schema, model } = require("mongoose");

const CategoriesSchema = Schema({
  categories: [String],
});

module.exports = model("Categories", CategoriesSchema);
