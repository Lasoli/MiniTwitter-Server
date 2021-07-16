const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    name: String,
    first_name: String,
    email: String,
  },
  { collection: "Tweets" }
);

module.exports = mongoose.model("Tweets", tweetSchema);
