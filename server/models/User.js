const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    minlength: [6, "Password should be at least six characters long"],
    maxlength: [1024],
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
