const dhtRouter = require('./dht');

module.exports = function(app) {
    app.use('/api/v1/sensor/dht', dhtRouter);
};
