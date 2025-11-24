
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T09:00:21', 411.0, 9574.0, 6863.0, 15319.0, 19311.0, 30623.0, 8541253.0], ['2025-11-24T09:00:51', 421.0, 9592.6, 6875.0, 15335.0, 19327.0, 30655.0, 6804934.0], ['2025-11-24T09:01:21', 441.0, 9557.6, 6863.0, 15311.0, 19311.0, 30623.0, 6813882.0], ['2025-11-24T09:01:51', 521.0, 9592.1, 6895.0, 15359.0, 19343.0, 30591.0, 8833143.0], ['2025-11-24T09:02:21', 491.0, 9565.8, 6895.0, 15335.0, 19311.0, 30479.0, 8050439.0]];

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

