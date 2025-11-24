
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T08:55:40', 341.0, 7933.2, 6423.0, 12815.0, 15711.0, 24639.0, 2770563.0], ['2025-11-24T08:56:10', 381.0, 7936.8, 6435.0, 12815.0, 15711.0, 24543.0, 3954027.0], ['2025-11-24T08:56:40', 370.0, 7948.0, 6443.0, 12839.0, 15743.0, 24623.0, 1659184.0], ['2025-11-24T08:57:10', 421.0, 7954.5, 6455.0, 12839.0, 15719.0, 24575.0, 5791629.0], ['2025-11-24T08:57:40', 370.0, 7983.1, 6483.0, 12895.0, 15783.0, 24607.0, 2033177.0]];

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

