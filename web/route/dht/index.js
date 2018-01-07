const express = require('express');
const router = express.Router();

const DhtService = require('./DhtService');

//接收dht温度
router.post('/set', DhtService.set);

// 获取dht数据
router.get('/today', DhtService.getData);
router.get('/day', DhtService.getDataByDay);
router.get('/week', DhtService.getDataByWeek);
router.get('/month', DhtService.getDataByMonth);
router.get('/last', DhtService.getDataByLimit);

module.exports = router;
