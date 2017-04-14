const pg = require('./knex')

var getAll = function() {
    pg('link').select()
}

module.exports = {
    getAll
}