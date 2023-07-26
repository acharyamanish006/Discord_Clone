const User = require("../models/User");

const new_User = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const user = await User.create({
      name,
    });
    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { new_User };
