const express = require("express");
const router = express.Router();
const TweetSchema = require("../models/tweetModel");

// router.post("/", (req, res) => {
//   TweetSchema.create({ name: "Gio", first_name: "X", email: "Y" }).then(
//     function (newTweet) {
//       res.send(newTweet);
//     }
//   );
// });

router.get("/", (req, res, next) => {
  TweetSchema.find({}, (err, data) => res.send(data));
});
// router.post("/", (req, res) => {
//   TweetSchema.create(
//     (newTweet = {
//       name: "Doe",
//       first_name: "John",
//       email: "john.doe@gmail.com",
//     }),
//     function (newTweet) {
//       res.send(newTweet);
//     }
//   );
// });
// router.put("/", (req, res) => {
//   TweetSchema.updateMany(
//     { email: "fghj@fghj" },
//     { $set: { email: "mmm@ooo" } }
//   ).then(function (editedTweet) {
//     res.send(editedTweet);
//   });
// });
// router.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });
//
// router.get("/", (req, res) => {
//   res.send("Here are your tweets");
// });
module.exports = router;
