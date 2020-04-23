const db = require("../data/dbConfig");

module.exports = {
  getAll,
  add,
  del
};

function getAll() {
  return db("characters");
}

function add(character) {
  return db("characters").insert(character);
}

function del(id) {
  return db("characters").del().where({ id });
}
