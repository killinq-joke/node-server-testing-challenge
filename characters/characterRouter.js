const router = require("express").Router();
const md = require("./characterModel");

router.get("/", (req, res) => {
  md.getAll().then((characters) => {
    res.json({ characters });
  });
});

module.exports = router;
