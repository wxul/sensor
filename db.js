const path = require('path');

var knex = require('knex')({
    dialect: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, './data/sensor.db')
    },
    useNullAsDefault: true
});

module.exports = knex;
