const dhtRouter = require('./dht');
const pmRouter = require('./pm');
const soilRouter = require('./soil');
const lightRouter = require('./light');
const sensorRouter = require('./sensor');

module.exports = function(app) {
    app.use('/api/v1/sensor/dht', dhtRouter);
    app.use('/api/v1/sensor/pm', pmRouter);
    app.use('/api/v1/sensor/soil', soilRouter);
    app.use('/api/v1/sensor/light', lightRouter);
    app.use('/api/v1/sensor/s', sensorRouter);
};
