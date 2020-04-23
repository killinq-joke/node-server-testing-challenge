
exports.up = function(knex) {
  return knex.schema.createTable("characters", tbl => {
      tbl.increments()
      tbl.string("name", 18).notNullable().unique()
      tbl.string("age", 3).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters")
};
