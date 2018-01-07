const express = require('express');
const router = express.Router();

const PMService = require('./PMService');

// 获取dht数据
router.get('/today', PMService.getData);
router.get('/day', PMService.getDataByDay);
router.get('/week', PMService.getDataByWeek);
router.get('/month', PMService.getDataByMonth);
router.get('/last', PMService.getDataByLimit);

module.exports = router;
