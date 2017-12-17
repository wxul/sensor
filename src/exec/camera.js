var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

var { dateFormat } = require('../utils');

function Camera() {}

Camera.prototype.takePhoto = function() {
    return new Promise((resolve, reject) => {
        var img_path = path.resolve(
            __dirname,
            `../../data/images/${dateFormat(new Date(), 'yyyyMMdd_HHmmss')}.png`
        );
        // console.log(img_path, 'raspistill -q 100 -t 1 -o ' + img_path);
        var dht = exec('raspistill -q 100 -t 1 -o ' + img_path, {
            maxBuffer: 10 * 1024 * 1024
        });
        dht.stdout.on('data', function(data) {});
        dht.stderr.on('data', function(data) {
            reject(data);
        });
        dht.on('exit', function(code) {
            // fs.stat(img_path, (err, stats) => {
            //     console.log(stats);
            //     resolve(true);
            // });
            resolve(true);
        });
    });
};

module.exports = Camera;
