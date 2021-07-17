const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: String,
    email: String,
    password: String,
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userSchema);
