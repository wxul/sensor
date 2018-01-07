const express = require('express');
const router = express.Router();

const LightService = require('./LightService');

// 获取dht数据
router.get('/today', LightService.getData);
router.get('/day', LightService.getDataByDay);
router.get('/week', LightService.getDataByWeek);
router.get('/month', LightService.getDataByMonth);
router.get('/last', LightService.getDataByLimit);

module.exports = router;
