const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
var cors = require("cors");
const userRouter = require("./src/routes/user.js");
const tweetRouter = require("./src/routes/tweet.js");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const db = require("./database");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/tweet", tweetRouter);

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
