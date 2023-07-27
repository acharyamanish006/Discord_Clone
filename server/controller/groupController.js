const User = require("../models/User");
const Group = require("../models/Group");

const create_NewGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = "64c16885f462f32ec69924c9";
    const newGroup = await Group.create({
      name,
      createdBy: userId,
    });
    const user = await User.findById(userId).populate("group");
    const { group } = user;
    group.push(newGroup._id);
    await user.save();
    res.json({
      success: true,
      user,
      newGroup,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const delete_Group = (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const create_NewChannel = (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const delete_Channel = (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  create_NewGroup,
  delete_Group,
  create_NewChannel,
  delete_Channel,
};
