const db = require("../data/dbConfig")

module.exports = {
  getAll,
  add
};

function getAll() {
    return db("characters")
}

function add(character) {
  return db("characters").insert(character);
}