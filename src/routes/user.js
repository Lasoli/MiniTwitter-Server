const express = require("express");
const router = express.Router();
const UserSchema = require("../models/userModel");

// GET all users
router.get("/", (req, res, next) => {
  UserSchema.find({}, (err, data) => res.send(data));
});

// GET a single user profile
router.get("/:id", async (req, res) => {
  try {
    const tweet = await UserSchema.find({ _id: req.params.id }, (err, data) =>
      res.send(data)
    );
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

// router.post("/", (req, res) => {
//   UserSchema.create({ name: "Gio", first_name: "X", email: "Y" }).then(
//     function (newUser) {
//       res.send(newUser);
//     }
//   );
// });

// router.post("/", (req, res) => {
//   UserSchema.create(
//     (newUser = {
//       name: "Doe",
//       first_name: "John",
//       email: "john.doe@gmail.com",
//     }),
//     function (newUser) {
//       res.send(newUser);
//     }
//   );
// });
// router.put("/", (req, res) => {
//   UserSchema.updateMany(
//     { email: "fghj@fghj" },
//     { $set: { email: "mmm@ooo" } }
//   ).then(function (editedUser) {
//     res.send(editedUser);
//   });
// });

// router.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });

// router.get("/", (req, res) => {
//   res.send("Here is the list of users");
// });

module.exports = router;
