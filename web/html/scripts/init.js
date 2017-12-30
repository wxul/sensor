(function(global) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    axios.get('/api/v1/sensor/dht/month').then(result => {
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
                    // subtext: '数据来自西安兰特水电测控技术有限公司',
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
                        name: '温度(℃)',
                        type: 'value',
                        max: 70
                    },
                    {
                        name: '湿度(%)',
                        type: 'value',
                        max: 100
                        // axisLabel: {
                        //     formatter: function(v) {
                        //         return -v;
                        //     }
                        // }
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
})(this);
