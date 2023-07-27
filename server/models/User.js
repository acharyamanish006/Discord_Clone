const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      default: "No Group",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", User_Schema);
