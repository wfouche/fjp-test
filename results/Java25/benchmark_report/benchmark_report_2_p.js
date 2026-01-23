
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2026-01-23T23:13:16', 441.0, 7875.1, 6523.0, 12791.0, 15583.0, 23455.0, 5506966.0], ['2026-01-23T23:13:46', 430.0, 7880.5, 6535.0, 12807.0, 15591.0, 23455.0, 1650182.0], ['2026-01-23T23:14:16', 441.0, 7897.8, 6555.0, 12831.0, 15623.0, 23487.0, 6451599.0]];

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

