
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-24T11:35:36', 320.0, 7924.5, 6295.0, 12871.0, 16007.0, 25711.0, 7206709.0], ['2025-11-24T11:36:06', 471.0, 7960.0, 6335.0, 12919.0, 16031.0, 25679.0, 7607657.0], ['2025-11-24T11:36:36', 451.0, 7965.0, 6343.0, 12927.0, 16047.0, 25679.0, 9361046.0], ['2025-11-24T11:37:06', 411.0, 7975.3, 6343.0, 12919.0, 16031.0, 25647.0, 22108046.0], ['2025-11-24T11:37:36', 310.0, 7971.1, 6363.0, 12935.0, 16055.0, 25599.0, 1088252.0]];

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

