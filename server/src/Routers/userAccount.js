const router = require("express").Router();
const CreateUserAccount = require("../Controllers/register");
const Login = require("../Controllers/login");

router.route("/register").post(CreateUserAccount);
router.route("/signin").post(Login);

module.exports = router;
