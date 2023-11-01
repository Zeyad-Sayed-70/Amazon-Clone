const UserAccount = require("../Models/userAccount");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check Register Data existance
    if (!req.body.email)
      return res.status(400).json({ message: "Email is not Found!" });
    if (!req.body.password)
      return res.status(400).json({ message: "Password is not Found!" });

    // Fetch User Data to Compare
    const UserData = await UserAccount.findOne({ email });

    // Check if User Founded
    if (UserData === null)
      return res.status(400).json({ message: "This user not found." });

    // Check Password Validation
    const isCorrect = bcrypt.compareSync(password, UserData.password);

    if (!isCorrect)
      return res.status(400).json({ message: "The password isn't correct." });

    const responseData = {
      username: UserData.username,
      email: UserData.email,
    };

    // Make the token
    const token = await jwt.sign({ email }, process.env.JWT_SECRET);

    // response successful message
    res
      .status(200)
      .json({ message: "You've been Loggined.", data: responseData, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = Login;
