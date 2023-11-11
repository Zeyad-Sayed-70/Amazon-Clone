const router = require("express").Router();
const CreateUserAccount = require("../Controllers/register");
const Login = require("../Controllers/login");
const CheckTokenValidation = require("../Controllers/checkTokenValidation");

router.route("/register").post(CreateUserAccount);
router.route("/signin").post(Login);
router.route("/check").post(CheckTokenValidation);

module.exports = router;
