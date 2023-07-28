const express = require("express");
const Router = express.Router();
const { sign_in, sign_up } = require("../controller/userController");

Router.route("/sign/in").post(sign_in);
Router.route("/sign/up").post(sign_up);

module.exports = Router;
