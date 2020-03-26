const knex = require("knex")
const configs = require("../knexfile")

const environnement = process.env.DB_ENV || "development"

module.exports = knex(configs[environnement])