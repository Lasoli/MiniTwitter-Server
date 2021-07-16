const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  first_name: String,
  email: String,
});

module.exports = mongoose.model("Post", userSchema);
