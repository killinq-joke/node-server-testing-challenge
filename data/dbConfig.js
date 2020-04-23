const knex = require("knex")

const configs = require("../knexfile")

const environment = process.env.DB_ENV || "testing"

module.exports = knex(configs[environment])