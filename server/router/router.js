const express = require("express");
const Router = express.Router();
const { send_Msg } = require("../controller/chatController");
const { new_User } = require("../controller/userController");

Router.route("/getMsg").get(send_Msg);
Router.route("/create/new/user").post(new_User);

module.exports = Router;
