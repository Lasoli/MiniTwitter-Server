const express = require("express");
const router = express.Router();
const TweetSchema = require("../models/tweetModel");

// URL already contains .../api/tweet
// GET all tweets
router.get("/", (req, res, next) => {
  TweetSchema.find({}, (err, data) => res.send(data));
});

// GET a single tweet
router.get("/:id", async (req, res) => {
  try {
    const tweet = await TweetSchema.find({ _id: req.params.id }, (err, data) =>
      res.send(data)
    );
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

// (req, res, next) => {
//   res.send(req.params);
// });

// POST a new tweet
// router.post("/", (req, res) => {
//   TweetSchema.create(
//     (newTweet = {
//       text: "xxx",
//       date: "xxx",
//       user_id: "xxx",
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
