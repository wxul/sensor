var rpio = require('rpio');

if (!rpio) throw new Error('rpio is required!!!');

var pinR = 33;
var pinG = 35;
var pinB = 37;

rpio.open(pinR, rpio.OUTPUT);
rpio.open(pinG, rpio.OUTPUT);
rpio.open(pinB, rpio.OUTPUT);

module.exports.turnOn = function() {
    rpio.write(pinR, rpio.HIGH);
    rpio.write(pinG, rpio.HIGH);
    rpio.write(pinG, rpio.HIGH);
};

module.exports.turnOff = function() {
    rpio.write(pinR, rpio.LOW);
    rpio.write(pinG, rpio.LOW);
    rpio.write(pinG, rpio.LOW);
};
