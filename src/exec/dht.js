var exec = require('child_process').exec;

function DHT() {}

DHT.prototype.getTemp = function() {
    return new Promise((resolve, reject) => {
        var dht = exec('python dht11_w.py');
        dht.stdout.on('data', function(data) {
            var d = data.match(/\(.+\)/);
            if (d && d.length) {
                // var str = data.split('\n').filter(e => !!e);
                // console.log(str);
                // var temp = str[str.length - 1];
                // temp = temp.split(' ');
                d = d.split(',');
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
