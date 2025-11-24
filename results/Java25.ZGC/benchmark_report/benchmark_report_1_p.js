
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T09:38:43', 360.0, 7992.0, 6375.0, 12999.0, 16127.0, 25791.0, 5785898.0], ['2025-11-24T09:39:13', 441.0, 8017.5, 6383.0, 13047.0, 16207.0, 25951.0, 3136264.0], ['2025-11-24T09:39:43', 421.0, 7995.1, 6375.0, 13007.0, 16151.0, 25919.0, 1432026.0], ['2025-11-24T09:40:13', 370.0, 7993.3, 6375.0, 13007.0, 16127.0, 25759.0, 6460759.0], ['2025-11-24T09:40:43', 401.0, 8004.4, 6383.0, 13015.0, 16167.0, 25839.0, 6654018.0]];

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

