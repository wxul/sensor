var rpio = require('rpio');

if (!rpio) throw new Error('rpio is required!!!');

var pin = 7;

rpio.open(pin, rpio.OUTPUT);

var state = false;

module.exports.turnOn = function() {
    state = true;
    rpio.write(pin, rpio.HIGH);

    setTimeout(() => {
        this.turnOff();
    }, 1000 * 60);
};

module.exports.turnOff = function() {
    state = false;
    rpio.write(pin, rpio.LOW);
};
