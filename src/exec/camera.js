var exec = require('child_process').exec;
var path = require('path');

function Camera() {}

Camera.prototype.takePhoto = function() {
    return new Promise((resolve, reject) => {
        var py_path = path.resolve(__dirname, '../../py/dht11_w.py');
        var dht = exec('raspistill -q 100 -t 0 -e png -o -', {
            maxBuffer: 10 * 1024 * 1024
        });
        dht.stdout.on('data', function(data) {
            console.log(typeof data, data);
        });
        dht.stderr.on('data', function(data) {
            reject(data);
        });
        dht.on('exit', function(code) {
            console.log('exit:', code);
            resolve(true);
        });
    });
};

module.exports = Camera;
