const light = require('../../../scripts/light2');

module.exports = {
    light: (req, res) => {
        light.turnOn();
        res.end('success');
    }
};