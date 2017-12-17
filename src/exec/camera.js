var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
// var Bufffer = require('Buffer');

function Camera() {}

Camera.prototype.takePhoto = function() {
    return new Promise((resolve, reject) => {
        var py_path = path.resolve(__dirname, '../../py/dht11_w.py');
        var dht = exec('raspistill -q 100 -t 1 -o -', {
            maxBuffer: 10 * 1024 * 1024
        });
        var responseData = '';
        dht.stdout.on('data', function(data) {
            // console.log(typeof data, data);
            responseData += data;
            // responseData.push(Buffer.from(data));
        });
        dht.stderr.on('data', function(data) {
            reject(data);
        });
        dht.on('exit', function(code) {
            // console.log('exit:', code);
            var finalData = Buffer.from(responseData);
            fs.writeFile(
                path.resolve(__dirname, '../../test.png'),
                finalData,
                e => {
                    console.log(e);
                }
            );
            resolve(true);
        });
    });
};

module.exports = Camera;
