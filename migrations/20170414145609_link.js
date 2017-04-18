
exports.up = function(knex, Promise) {
  return knex.schema.createTable('link', (table) => {
      table.increments() //sets up the serial/id
      table.integer('votes').defaultTo(0)
      table.string('url')
      table.string('title')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('link')
};
