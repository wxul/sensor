const express = require('express');
const router = express.Router();

const SensorService = require('./SensorService');

// 获取dht数据
router.get('/light', SensorService.light);
router.get('/pump', SensorService.pump);

module.exports = router;