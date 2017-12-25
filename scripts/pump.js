var rpio = require('rpio');

if (!rpio) throw new Error('rpio is required!!!');

var pin1 = 38;
var pin2 = 40;

rpio.open(pin1, rpio.OUTPUT);
rpio.open(pin2, rpio.OUTPUT);

rpio.write(pin1, rpio.HIGH);
rpio.write(pin2, rpio.LOW);

rpio.sleep(2);

rpio.close(pin1);
rpio.close(pin2);
