const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3');
var file = path.resolve(__dirname, '../data/sensor.db');

if (fs.existsSync(file)) {
    console.log('Database file is already exist!');
} else {
    var db = new sqlite3.Database(file, err => {
        if (err) {
            console.error('create error!', err);
        } else {
            console.log('db created!');
            require('./init')();
        }
    });
}
