const UserAccount = require("../Models/userAccount");
const { request, response } = require("express");
const hash = require("bcrypt");

const CreateUserAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check Register Data existance
    if (!req.body.username)
      res.status(400).json({ message: "Username is not Found!" });
    if (!req.body.email)
      res.status(400).json({ message: "Email is not Found!" });
    if (!req.body.password)
      res.status(400).json({ message: "Password is not Found!" });

    // Hash Password
    const hashedPass = hash.salt(password);

    // Create new user account
    await UserAccount.create({
      username,
      email,
      password: hashedPass,
    });

    // response successful message
    res.status(200).json({ message: "You've been Created New Account." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = CreateUserAccount;
