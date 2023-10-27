const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const router = require("./src/Routers/userAccount");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare the User Account Router
app.use("/user", router);

// Connect to MongoDB
const DB_URI = process.env.MONGODB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Connection to DB: OK"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
