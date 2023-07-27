const mongoose = require("mongoose");

const Group_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], //array of user ids who are part,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //user id which is creating the group
  textChannel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Group", Group_Schema);
