const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Post", userSchema);
