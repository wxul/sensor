const dhtRouter = require('./dht');
const pmRouter = require('./pm');

module.exports = function(app) {
    app.use('/api/v1/sensor/dht', dhtRouter);
    app.use('/api/v1/sensor/pm', pmRouter);
};
