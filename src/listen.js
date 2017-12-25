/* eslint-disable node/no-missing-require */
'use strict';

// Use a Readline parser

const SerialPort = require('serialport');
const parsers = SerialPort.parsers;

var db = require('./db');

// Use a `\r\n` as a line terminator
const parser = new parsers.Readline({
    delimiter: '\n'
});

const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
});

port.pipe(parser);

port.on('open', () => console.log('Port open'));

var state = false;
var begin = +new Date();
parser.on('data', data => {
    // 抛弃掉前5s的数据
    if (state || +new Date() - 5 * 1000 > begin) {
        state = true;
        console.log(data);
        try {
            var obj = JSON.parse(data);
            if (obj.value.error) {
                console.log(obj.value.error);
                port.write('T');
            } else {
                switch (obj.type) {
                    case 'dht':
                        db.insertDHT(obj.value.Humidity, obj.value.Temperature);
                        break;
                    case 'pm':
                        db.insertPM(obj.value.voltage, obj.value['pm2.5']);
                        break;
                    case 'soil':
                        db.insertSoil(obj.value.voltage, 0);
                        break;
                    case 'light':
                        db.insertLight(obj.value.voltage, 0);
                        break;
                    case 'distance':
                        db.insertDHT(obj.Humidity, obj.Temperature);
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
});
//setTimeout(()=>{
//  port.write('L\n');
//},200);
//port.write('T');

// The parser will emit any string response
