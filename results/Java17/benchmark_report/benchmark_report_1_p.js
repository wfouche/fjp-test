
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T08:49:43', 380.0, 8865.2, 8067.0, 13623.0, 16151.0, 22783.0, 4222690.0], ['2025-11-24T08:50:13', 330.0, 8883.6, 8087.0, 13647.0, 16167.0, 22815.0, 6826930.0], ['2025-11-24T08:50:43', 371.0, 8837.5, 8035.0, 13575.0, 16095.0, 22719.0, 4017469.0], ['2025-11-24T08:51:13', 360.0, 8825.4, 8027.0, 13535.0, 16055.0, 22655.0, 6392925.0], ['2025-11-24T08:51:43', 361.0, 8874.6, 8075.0, 13639.0, 16175.0, 22799.0, 5549715.0]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2', 'sensor3', 'sensor4', 'sensor5', 'sensor6', 'sensor7'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Max',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor7' // refer sensor 1 value
     }
  },{
     name: 'p99',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor6' // refer sensor 1 value
     }
  },{
     name: 'p95',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor5' // refer sensor 1 value
     }

  },{
     name: 'p90',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor4' // refer sensor 1 value
     }

  },{
     name: 'p50',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor3' // refer sensor 1 value
     }

  },{
     name: 'Avg',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
     }
  },{
     name: 'Min',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1'
  }
}]
};
myChart2.setOption(option);

window.onresize = function() {
  myChart1.resize();
  myChart2.resize();
};

