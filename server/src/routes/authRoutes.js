const express = require("express");
const router = express.Router();

const registerModule = require("../controllers/auth/register");
const loginModule = require("../controllers/auth/login");

console.log("Register:", registerModule);
console.log("Login:", loginModule);

router.post("/register", registerModule.register);
router.post("/login", loginModule.login);

module.exports = router;