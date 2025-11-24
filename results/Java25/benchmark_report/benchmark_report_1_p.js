
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T09:04:53', 511.0, 8003.2, 6375.0, 12999.0, 16135.0, 25759.0, 14353562.0], ['2025-11-24T09:05:23', 431.0, 8012.4, 6395.0, 12999.0, 16127.0, 25759.0, 11715613.0], ['2025-11-24T09:05:53', 411.0, 8004.2, 6391.0, 12991.0, 16095.0, 25663.0, 10946792.0], ['2025-11-24T09:06:23', 461.0, 8007.5, 6395.0, 12991.0, 16103.0, 25727.0, 15321706.0], ['2025-11-24T09:06:53', 381.0, 8021.0, 6415.0, 13031.0, 16127.0, 25631.0, 17163202.0]];

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

