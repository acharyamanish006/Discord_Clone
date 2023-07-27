const mongoose = require("mongoose");

const Message_Schema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, "sender field is empty"],
  },
  content: {
    type: String,
    trim: true,
    minlength: [1, "content should not be less than one character"],
    maxlength: [500, "Content can have maximum of  280 characters"],
    required: [true, "Message cannot be blank"],
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
});

module.exports = mongoose.model("Chat", Message_Schema);
