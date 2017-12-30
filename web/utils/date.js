module.exports = {
    // 获取日期当天开始时间
    getDayBegin(date) {
        var d = date instanceof Date ? date : new Date();
        return new Date(
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate(),
            0,
            0,
            0,
            0
        );
    },
    // 获取当天所在月份开始时间
    getMonthBegin(date) {
        var d = date instanceof Date ? date : new Date();
        return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
    }
};
