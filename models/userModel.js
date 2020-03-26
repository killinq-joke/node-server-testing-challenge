const db = require("../data/db-configs")

module.exports = {
    insert,
    remove
}

function insert(user) {
    return db("user").insert(user)
}

function remove(id) {
    return db("user").del(id)
}