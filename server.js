const express = require("express");
const app = express();
const userRouter = require("./src/routes/user.js");
const messageRouter = require("./src/routes/message.js");
const port = 3000;
const config = require("./database");
const mongoose = require("mongoose");

// app.use("/api/user", userRouter);
// app.use("/api/message", messageRouter);

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
