
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
      table.increments()
      table.string('comment_text')
      table.integer('link_id').references('link.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment')
};
