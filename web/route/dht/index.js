const express = require('express');
const router = express.Router();

const DhtService = require('./DhtService');

//接收dht温度
router.post('/set', DhtService.set);

module.exports = router;
