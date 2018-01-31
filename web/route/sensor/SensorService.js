const light = require('../../../scripts/light2');
const pump = require('../../../scripts/pump');

const { pump_key } = require('../../../app_config');

module.exports = {
    light: (req, res) => {
        light.turnOn();
        res.end('success');
    },
    pump: (req, res) => {
        var k = req.query.k || '';
        console.log(k, pump_key);
        if (k == pump_key) {
            setImmediate(pump.begin);
        }
        res.end('success');
    }
};
