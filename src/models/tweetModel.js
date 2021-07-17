const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    _id: String,
    text: String,
    date: String,
    user_id: { type: Schema.Types.ObjectId, ref: "UserSchema" },
  },
  { collection: "Tweets" }
);

module.exports = mongoose.model("Tweets", tweetSchema);
