var knex = require('../../../db');

module.exports = {
    set: (req, res) => {
        res.end(123123);
    },
    getData: (req, res) => {
        var type = req.type || 'day';
    }
};
