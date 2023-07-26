const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/DISCORD";

const Connect_DB = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Connect_DB;
