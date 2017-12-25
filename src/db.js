var knex = require('../db');

module.exports.insertDHT = function(humidity, temperature) {
    knex
        .insert({ humidity, temperature, createtime: new Date() })
        .into('dht')
        .catch(function(e) {
            console.error(e);
        });
};

module.exports.insertPM = function(voltage, value) {
    knex
        .insert({ voltage, value, createtime: new Date() })
        .into('pm')
        .catch(function(e) {
            console.error(e);
        });
};

module.exports.insertSoil = function(voltage, value) {
    knex
        .insert({ voltage, value, createtime: new Date() })
        .into('soil')
        .catch(function(e) {
            console.error(e);
        });
};

module.exports.insertLight = function(voltage, value) {
    knex
        .insert({ voltage, value, createtime: new Date() })
        .into('light')
        .catch(function(e) {
            console.error(e);
        });
};

module.exports.insertWater = function(voltage, value) {
    knex
        .insert({ voltage, value, createtime: new Date() })
        .into('water')
        .catch(function(e) {
            console.error(e);
        });
};
