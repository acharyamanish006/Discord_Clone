const mongoose = require("mongoose");

const Channel_Schema = new mongoose.Schema({
  channelId: {
    type: String,
    unique: [true, "channel already exists"],
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Channel", Channel_Schema);
