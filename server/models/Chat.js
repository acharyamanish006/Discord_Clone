const mongoose = require("mongoose");

const Chat_Schema = new mongoose.Schema({});

module.exports = mongoose.model("Chat", Chat_Schema);
