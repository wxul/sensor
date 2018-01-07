(function(global) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dht'));

    axios.get('/api/v1/sensor/dht/last').then(result => {
        console.log(result);
        if (result.status == 200 && result.data) {
            var time = result.data.map(e => {
                return new Date(e.createtime).toLocaleString();
                // return e.createtime;
            });
            var temp = result.data.map(e => {
                return e.temperature;
            });
            var hum = result.data.map(e => {
                return e.humidity;
            });
            // console.log(data);
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '温湿度关系图',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        return (
                            params[0].name +
                            '<br/>' +
                            params[0].seriesName +
                            ' : ' +
                            params[0].value +
                            ' ℃<br/>' +
                            params[1].seriesName +
                            ' : ' +
                            params[1].value +
                            ' %'
                        );
                    }
                },
                legend: {
                    data: ['温度', '湿度'],
                    x: 'left'
                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         magicType: { show: true, type: ['line', 'bar'] },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                // dataZoom: {
                //     show: true,
                //     realtime: true,
                //     start: 0,
                //     end: 100
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: time
                },
                yAxis: [
                    {
                        name: '湿度(%)',
                        type: 'value',
                        max: 100
                        // axisLabel: {
                        //     formatter: function(v) {
                        //         return -v;
                        //     }
                        // }
                    },
                    {
                        name: '温度(℃)',
                        type: 'value',
                        max: 70
                    }
                ],
                series: [
                    {
                        name: '温度',
                        type: 'line',
                        data: temp,
                        yAxisIndex: 1
                    },
                    {
                        name: '湿度',
                        type: 'line',
                        data: hum
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    });

    var myChart2 = echarts.init(document.getElementById('pm'));

    axios.get('/api/v1/sensor/pm/last').then(result => {
        console.log(result);
        if (result.status == 200 && result.data) {
            var time = result.data.map(e => {
                return new Date(e.createtime).toLocaleString();
                // return e.createtime;
            });
            var value = result.data.map(e => {
                return e.value;
            });
            // console.log(data);
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '灰尘',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        return (
                            params[0].name +
                            '<br/>' +
                            params[0].seriesName +
                            ' : ' +
                            params[0].value +
                            ' μg/m³'
                        );
                    }
                },
                legend: {
                    data: ['PM'],
                    x: 'left'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: time
                },
                yAxis: [
                    {
                        name: 'PM',
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'PM',
                        type: 'line',
                        data: value
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart2.setOption(option);
        }
    });

    var myChart3 = echarts.init(document.getElementById('soil'));

    axios.get('/api/v1/sensor/soil/last').then(result => {
        console.log(result);
        if (result.status == 200 && result.data) {
            var time = result.data.map(e => {
                return new Date(e.createtime).toLocaleString();
            });
            var value = result.data.map(e => {
                return e.value.toFixed(2);
            });
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '土壤湿度',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        return (
                            params[0].name +
                            '<br/>' +
                            params[0].seriesName +
                            ' : ' +
                            params[0].value +
                            ' '
                        );
                    }
                },
                legend: {
                    data: ['湿度'],
                    x: 'left'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: time
                },
                yAxis: [
                    {
                        name: '湿度',
                        type: 'value',
                        max: 5
                    }
                ],
                series: [
                    {
                        name: '湿度',
                        type: 'line',
                        data: value
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart3.setOption(option);
        }
    });

    var myChart4 = echarts.init(document.getElementById('light'));

    axios.get('/api/v1/sensor/light/last').then(result => {
        console.log(result);
        if (result.status == 200 && result.data) {
            var time = result.data.map(e => {
                return new Date(e.createtime).toLocaleString();
            });
            var value = result.data.map(e => {
                return e.value.toFixed(2);
            });
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '光照',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        return (
                            params[0].name +
                            '<br/>' +
                            params[0].seriesName +
                            ' : ' +
                            params[0].value +
                            ' '
                        );
                    }
                },
                legend: {
                    data: ['光照'],
                    x: 'left'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: time
                },
                yAxis: [
                    {
                        name: '光照',
                        type: 'value',
                        max: 5
                    }
                ],
                series: [
                    {
                        name: '光照',
                        type: 'line',
                        data: value
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart4.setOption(option);
        }
    });
})(this);
