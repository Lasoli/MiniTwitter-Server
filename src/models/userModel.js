const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: Number,
    username: String,
    email: String,
    password: String,
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userSchema);
