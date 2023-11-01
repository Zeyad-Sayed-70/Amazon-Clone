const { default: mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Declare the User Account Router
app.use("/user", require("./src/Routers/userAccount"));
app.use("/products", require("./src/Routers/products"));

// Connect to MongoDB
const DB_URI = process.env.MONGODB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Connection to DB: OK"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
