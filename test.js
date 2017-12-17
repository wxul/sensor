var rpio = require('rpio');

var pin1 = 38;
var pin2 = 40;

rpio.open(pin1, rpio.OUTPUT);
rpio.open(pin2, rpio.OUTPUT);

rpio.write(pin1, rpio.HIGH);
rpio.write(pin2, rpio.LOW);

rpio.sleep(2);

setTimeout(() => {
  console.log(123);
}, 2000);
