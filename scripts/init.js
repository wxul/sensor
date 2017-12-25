// const path = require('path');

// var knex = require('knex')({
//     dialect: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, '../data/sensor.db')
//     },
//     useNullAsDefault: true
// });

var knex = require('../db');

module.exports = function() {
    knex.schema
        .createTableIfNotExists('dht', function(table) {
            table.increments('id');
            table.float('humidity');
            table.float('temperature');
            table.datetime('createtime');
        })
        .createTableIfNotExists('pm', function(table) {
            table.increments('id');
            table.float('voltage');
            table.float('value');
            table.datetime('createtime');
        })
        .createTableIfNotExists('soil', function(table) {
            table.increments('id');
            table.float('voltage');
            table.float('value');
            table.datetime('createtime');
        })
        .createTableIfNotExists('light', function(table) {
            table.increments('id');
            table.float('voltage');
            table.float('value');
            table.datetime('createtime');
        })
        .createTableIfNotExists('distance', function(table) {
            table.increments('id');
            table.float('voltage');
            table.float('value');
            table.datetime('createtime');
        })
        .createTableIfNotExists('water', function(table) {
            table.increments('id');
            table.float('voltage');
            table.float('value');
            table.datetime('createtime');
        })
        .then(data => {
            console.log('table created!');
        })
        .catch(function(e) {
            console.error(e);
        });
};
