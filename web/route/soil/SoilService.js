var knex = require('../../../db');
var dateUtil = require('../../utils/date');

module.exports = {
    getData: (req, res) => {
        var begin = dateUtil.getDayBegin();
        var end = new Date();
        knex('soil')
            .whereBetween('createtime', [begin, end])
            .then(e => {
                console.log(e);
                res.end('getData12');
            });
        // res.end('getData');
    },
    getDataByDay: (req, res) => {
        var current = new Date();
        var year = ~~req.query.year || current.getFullYear();
        var month = ~~req.query.month || current.getMonth();
        var day = ~~req.query.month || current.getDate();

        var begin = new Date(year, month, day, 0, 0, 0, 0);
        var end = new Date(year, month, day + 1, 0, 0, 0, 0);

        knex('soil')
            .whereBetween('createtime', [begin, end])
            .then(e => {
                res.status(200).json(e);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    getDataByWeek: (req, res) => {
        var type = req.type || 'day';
        res.end('getDataByWeek');
    },
    getDataByMonth: (req, res) => {
        var current = new Date();
        var year = ~~req.query.year || current.getFullYear();
        var month = ~~req.query.month || current.getMonth();

        var begin = new Date(year, month, 1, 0, 0, 0, 0);
        var end = new Date(year, month + 1, 1, 0, 0, 0, 0);
        knex('soil')
            .whereBetween('createtime', [begin, end])
            .then(e => {
                res.status(200).json(e);
            })
            .catch(err => {
                res.status(500).json(err);
            });
        // res.end('getDataByMonth');
    },
    getDataByLimit: (req, res) => {
        var limit = ~~req.query.last || 1000;
        knex('soil')
            .orderBy('id', 'desc')
            .limit(limit)
            .then(e => {
                res.status(200).json((e || []).reverse());
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
};
