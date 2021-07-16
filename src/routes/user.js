const express = require("express");
const router = express.Router();
const UserSchema = require("../models/userModel");

// router.post("/", (req, res) => {
//   UserSchema.create({ name: "Gio", first_name: "X", email: "Y" }).then(
//     function (newUser) {
//       res.send(newUser);
//     }
//   );
// });

router.get("/", (req, res, next) => {
  UserSchema.find({}, (err, data) => res.send(data));
});
// router.post("/", (req, res) => {
//   UserSchema.create(
//     (newEntry = {
//       name: "Doe",
//       first_name: "John",
//       email: "john.doe@gmail.com",
//     }),
//     function (newEntry) {
//       res.send(newEntry);
//     }
//   );
// });
// router.put("/", (req, res) => {
//   UserSchema.updateMany(
//     { email: "fghj@fghj" },
//     { $set: { email: "mmm@ooo" } }
//   ).then(function (editedEntry) {
//     res.send(editedEntry);
//   });
// });
// router.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });
//
// router.get("/", (req, res) => {
//   res.send("Here is the list of students");
// });
module.exports = router;
