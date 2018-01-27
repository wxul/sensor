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

// const port = new SerialPort('COM5', {
//     baudRate: 9600
// });

const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
});

function parseData(data) {
    try {
        var obj = JSON.parse(data);
        if (obj.value.error) {
            console.log(obj.value.error);
            port.write(obj.type[0].toUpperCase());
        } else {
            switch (obj.type) {
                case 'dht':
                    db.insertDHT(obj.value.Humidity, obj.value.Temperature);
                    break;
                case 'pm':
                    db.insertPM(obj.value.voltage, obj.value['pm2.5']);
                    break;
                case 'soil':
                    db.insertSoil(obj.value.voltage, 5 - obj.value.voltage);
                    break;
                case 'light':
                    db.insertLight(obj.value.voltage, 5 - obj.value.voltage);

                    // light
                    // try {
                    //     var light = require('../scripts/light');
                    //     var v = 5 - obj.value.voltage;
                    //     if (v > 2) {
                    //         light.turnOff();
                    //     } else {
                    //         light.turnOn();
                    //     }
                    // } catch (error) {}
                    break;
                // case 'distance':
                //     db.insertDHT(obj.Humidity, obj.Temperature);
                //     break;
                default:
                    break;
            }
        }
    } catch (error) {
        console.log(error);
        port.write('A');
    }
}

port.pipe(parser);

port.on('open', () => {
    console.log('Port open');
    // port.write('A');
    setInterval(() => {
        port.write('A');
    }, 1000 * 60 * 5);
});

// var first = true;
// var begin = +new Date();
parser.on('data', data => {
    // 丢掉第一次的数据
    // if (first) {
    //     first = false;
    //     return;
    // }

    console.log(data);

    if (data) {
        var arr = data.split(';').filter(e => !!e);
        arr.forEach(e => {
            parseData(e);
        });
    }
});
//setTimeout(()=>{
//  port.write('L\n');
//},200);
// port.write('ALL');

// The parser will emit any string response
