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
      channelId: {
        type: String,
        unique: [true, "channel already exists"],
        chat: [
          {
            message: {
              content: {
                type: String,
              },
              senderName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
              timestamp: {
                type: Date,
                default: Date.now(),
              },
            },
          },
        ],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Group", Group_Schema);
