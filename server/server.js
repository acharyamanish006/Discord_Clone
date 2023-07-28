const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const router = require("./router/router");
const userRouter = require("./router/userRouter");
const groupRouter = require("./router/groupRouter");
const channelRouter = require("./router/channelRouter");
const messageRouter = require("./router/messageRouter");
const PORT = 5000;
const Connect_DB = require("./config/connectDB");

//connecting to database
Connect_DB();

//middleWare
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Routes here...
app.use("/api/v1", router);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);
app.use("/api/channel", channelRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
