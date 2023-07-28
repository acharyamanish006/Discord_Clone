const express = require("express");
const Router = express.Router();
// const { send_Msg } = require("../controller/chatController");
const { new_User } = require("../controller/userController");
const {
  create_NewGroup,
  delete_Group,
} = require("../controller/groupController");
const {
  create_Channel,
  fetch_Channel,
  delete_Channel,
} = require("../controller/channelController");

// Router.route("/getMsg").get(send_Msg);
Router.route("/create/new/user").post(new_User);

//groups
Router.route("/create/new/group").post(create_NewGroup);
Router.route("/delete/:id/group").put(delete_Group); // deletes group

//channels
Router.route("/group/:groupId/new/channel").post(create_Channel);
Router.route("/group/:groupId/delete/:id/channel").put(delete_Channel); //deletes channel

module.exports = Router;
