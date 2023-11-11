const UserAccount = require("../Models/userAccount");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

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
    const hashedPass = await bcrypt.hash(password, saltRounds);

    // Create new user account
    await UserAccount.create({
      username,
      email,
      password: hashedPass,
    });

    // Make the token
    const token = await jwt.sign({ email }, process.env.JWT_SECRET);

    // response successful message
    res
      .status(200)
      .json({ message: "You've been Created New Account.", token });
  } catch (error) {
    console.log(error);
    if (error.code === 11000)
      return res.status(400).json({ message: "This Email is already exist!" });

    res.status(400).json({ message: error.message });
  }
};

module.exports = CreateUserAccount;
