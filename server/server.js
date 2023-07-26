const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
