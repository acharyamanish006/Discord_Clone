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
});

module.exports = mongoose.model("Channel", Channel_Schema);
