const db = require("../data/db-configs")

module.exports = {
    getAll,
    add,
    remove
}

function getAll() {
    return db("users")
}

function add(user) {
    return db("users").insert(user)
}

function remove(id) {
    return db("users").del().where({id})
}