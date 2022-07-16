const router = require("express").Router();
const authContoller = require("./auth.controller");




router.post("/login",  authContoller.loginController);

module.exports = router;



