const User = require("../models/User");
const Group = require("../models/Group");
const Channel = require("../models/Channel");

const create_Channel = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.params.groupId);
    const userId = "64c16885f462f32ec69924c9";
    const groupId = "64c23f2ec60d33fc5e597e2c";
    const newChannel = await Channel.create({
      channelId: name,
    });
    // check if user exists in db or not
    const group = await Group.findById(groupId);
    const { textChannel } = group;
    textChannel.push(newChannel._id);
    group.save();
    res.json({
      group,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const delete_Channel = async (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const fetch_Channel = async (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { create_Channel, delete_Channel, fetch_Channel };
