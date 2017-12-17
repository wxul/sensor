/**
 * Created by RockeyCai on 16/2/22.
 * 创建文件夹帮助类
 */

var fs = require('fs');
var path = require('path');

//递归创建目录 异步方法
function mkdirs(dirname, callback) {
    fs.exists(dirname, function(exists) {
        if (exists) {
            callback();
        } else {
            //console.log(path.dirname(dirname));
            mkdirs(path.dirname(dirname), function() {
                fs.mkdir(dirname, callback);
            });
        }
    });
}

//递归创建目录 同步方法
function mkdirsSync(dirname) {
    //console.log(dirname);
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

/**
 * 日期格式化
 * @param {* Date} date 日期
 * @param {* String} formatStr 格式化字符串
 */
function dateFormat(date, formatStr) {
    if (!(date instanceof Date)) throw new Error('Need Date Type');
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
        'H+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    };
    var week = {
        '0': '/u65e5',
        '1': '/u4e00',
        '2': '/u4e8c',
        '3': '/u4e09',
        '4': '/u56db',
        '5': '/u4e94',
        '6': '/u516d'
    };
    if (/(y+)/.test(formatStr)) {
        formatStr = formatStr.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }
    if (/(E+)/.test(formatStr)) {
        formatStr = formatStr.replace(
            RegExp.$1,
            (RegExp.$1.length > 1
                ? RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468'
                : '') + week[date.getDay() + '']
        );
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(formatStr)) {
            formatStr = formatStr.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length)
            );
        }
    }
    return formatStr;
}

module.exports.mkdirs = mkdirs;

module.exports.mkdirsSync = mkdirsSync;

module.exports.dateFormat = dateFormat;

//调用
//mkdirsSync("./aa/bb/cc" , null);
//mkdirs("./aa/bb/cc", function (ee) {
//    console.log(ee)
//});
