const router = require("express").Router();
const exercises = require("./exercises");
const users = require("./users");

router.use("/api/exercises", exercises);
router.use("/api/users", users);

// If no API routes are hit, send the React app
router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });


module.exports = router;
