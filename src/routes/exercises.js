const router = require("express").Router();
const Exercise = require("../models/exerciseModel");

//Get all exercises
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(500).json(`Error : ${err}`));
});

//add to database
router.route("/add").post((req, res) => {
  let { username, description } = req.body;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  //saving to the database
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(500).json(`Error: ${err}`));
});

//fnd single
router.route("/:id").get((req, res) => {
  const { id } = req.params;
  Exercise.findById(id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(500).json(`Error: ${err}`));
});

//update
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(500).json("Error: " + err));
    })
    .catch(err => res.status(500).json(`Error: ${err}`));
});

//delete
router.route("/:id").delete((req, res) => {
  const { id } = req.params;
  Exercise.findByIdAndDelete(id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(500).json(`Error ${err}`));
});

module.exports = router;
