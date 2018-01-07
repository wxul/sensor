const express = require('express');
const router = express.Router();

const SoilService = require('./SoilService');

// 获取dht数据
router.get('/today', SoilService.getData);
router.get('/day', SoilService.getDataByDay);
router.get('/week', SoilService.getDataByWeek);
router.get('/month', SoilService.getDataByMonth);
router.get('/last', SoilService.getDataByLimit);

module.exports = router;
