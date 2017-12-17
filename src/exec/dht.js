var exec = require('child_process').exec;
var path = require('path');

function DHT() {}

DHT.prototype.getTemp = function() {
    return new Promise((resolve, reject) => {
        var py_path = path.resolve(__dirname, '../../py/dht11_w.py');
        var dht = exec('python ' + py_path);
        dht.stdout.on('data', function(data) {
            var d = data.match(/\(.+\)/);
            console.log(data, d, typeof data, typeof d);
            if (d && d.length) {
                // var str = data.split('\n').filter(e => !!e);
                // console.log(str);
                // var temp = str[str.length - 1];
                // temp = temp.split(' ');
                d = d[0].split(',');
                resolve({
                    temp: +d[1],
                    // temp_point: temp[1],
                    humi: +d[4]
                    // humi_point: temp[3]
                });
            } else {
                // console.log(false);
                resolve(false);
            }
        });
        dht.stderr.on('data', function(data) {
            reject(data);
        });
        dht.on('exit', function(code) {
            console.log('exit:', code);
        });
    });
};

module.exports = DHT;
