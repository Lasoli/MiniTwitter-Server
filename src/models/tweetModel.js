const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    user_id: Number,
    text: String,
    date: String,
  },
  { collection: "Tweets" }
);

module.exports = mongoose.model("Tweets", tweetSchema);
