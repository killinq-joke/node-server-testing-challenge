const router = require("express").Router();
const md = require("./characterModel");

router.get("/", (req, res) => {
  md.getAll()
    .then((characters) => {
      res.json({ characters });
    })
    .catch((err) => {
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  const character = req.body;
  md.add(character)
    .then((response) => {
      res.status(201).json({ message: "character added" });
    })
    .catch((err) => {
      res.status(500).end();
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  md.del(id)
    .then((response) => {
      res.status(200).json({ message: "character deleted" });
    })
    .catch((err) => {
      res.status(500).end();
    });
});

module.exports = router;
