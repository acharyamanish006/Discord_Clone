const send_Msg = async (req, res) => {
  try {
    res.send("msg send");
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const fetch_Msg = async (req, res) => {
  try {
    res.send("msg send");
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { send_Msg, fetch_Msg };
