var rpio = require('rpio');

var pin = 7;

var data = [];
var i = 0;

// rpio.msleep(1);
rpio.open(pin, rpio.OUTPUT, rpio.HIGH);
rpio.msleep(100);
rpio.write(pin, rpio.LOW);
rpio.msleep(0.02);
rpio.write(pin, rpio.HIGH);
rpio.mode(pin, rpio.INPUT);

// while(rpio.read(pin) == rpio.HIGH) continue;
while(rpio.read(pin) == rpio.LOW) continue;
while(rpio.read(pin) == rpio.HIGH) continue;

while(i<40){
    var k = 0;
    while(rpio.read(pin) === rpio.LOW) continue;
    while(rpio.read(pin) === rpio.HIGH){
        k += 1;
        if(k > 100) break;
    }
    if(k < 8){
        data.push(0);
    }else{
        data.push(1);
    }
    i += 1;
}

rpio.close(pin);

console.log('sensor is working.');
console.log(data.join(''));

var bitFormat = (e, i) => {
    return Math.pow(e * 2, (7 - i));
}

var sum = (a, b) => {
    return a + b;
}

var humidity = data.slice(0, 8).map(bitFormat).reduce(sum);
var humidity_point = data.slice(8, 16).map(bitFormat).reduce(sum);
var temperature = data.slice(16, 24).map(bitFormat).reduce(sum);
var temperature_point = data.slice(24, 32).map(bitFormat).reduce(sum);
var check = data.slice(32, 40).map(bitFormat).reduce(sum);

console.log(humidity,humidity_point,temperature,temperature_point,check);
console.log('checked:', check==(humidity+humidity_point+temperature+temperature_point));
