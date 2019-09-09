const router = require("express").Router();
const User = require("../models/userModel");

//get All the users
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json(`Error: ${err}`));
});

//post to database
router.route("/add").post((req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json('User added'))
    .catch(err => res.status(500).json(`Error: ${err}`));
});

//delete
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(500).json(`Error: ${err}`));
});
module.exports = router;
