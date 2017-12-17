var rpio = require('rpio');

var pin = 11;

rpio.open(pin,rpio.OUTPUT);
rpio.write(pin,rpio.LOW);
