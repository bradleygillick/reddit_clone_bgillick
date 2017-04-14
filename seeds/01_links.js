exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 69,
          url: 'http://www.google.com',
          title: 'Google'
        },
        {
          votes: 13,
          url: 'http://www.yahoo.com',
          title: 'Yahoo'
        },
        {
          votes: -5,
          url: 'http://www.ask.com',
          title: 'AskJeeves'
        }
      ]);
    });
};