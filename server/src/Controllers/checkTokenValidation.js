const jwt = require("jsonwebtoken");
const userAccount = require("../Models/userAccount");

const CheckTokenValidation = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token)
      return res
        .status(400)
        .json({ message: "Token is not Found", valid: false });

    await jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err)
        return res
          .status(200)
          .json({ message: "Token is not Valid", valid: false });

      const userData = await userAccount
        .findOne({ email: decoded.email })
        .select({ username: 1, email: 1 });

      return res
        .status(200)
        .json({ message: "Token is Valid", valid: true, userData });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = CheckTokenValidation;
