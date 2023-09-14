const mongoose = require("mongoose");
// const URL = "mongodb://127.0.0.1:27017/DISCORD";
// const URL = "mongodb://localhost:27017/DISCORD";

const Connect_DB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Connect_DB;
