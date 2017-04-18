
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {id: 1, comment_text: 'rowValue1', link_id: 1},
        {id: 2, comment_text: 'rowValue2', link_id: 1},
        {id: 3, comment_text: 'rowValue3', link_id: 2}
      ]);
    });
};
