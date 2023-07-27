const express = require("express");
const Router = express.Router();
const { send_Msg } = require("../controller/chatController");
const { new_User } = require("../controller/userController");
const {
  create_NewChannel,
  create_NewGroup,
  delete_Channel,
  delete_Group,
} = require("../controller/groupController");

Router.route("/getMsg").get(send_Msg);
Router.route("/create/new/user").post(new_User);

//groups and channels
Router.route("/create/new/group").post(create_NewGroup);
Router.route("/delete/:id/group").put(delete_Group); // deletes group
Router.route("/create/new/channel").post(create_NewChannel);
Router.route("/delete/:id/channel").put(delete_Channel); //deletes channel

module.exports = Router;
