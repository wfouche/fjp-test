
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-24T09:00:21', 300000.0, 0.0], ['2025-11-24T09:00:51', 299852.7, 0.0], ['2025-11-24T09:01:21', 299942.1, 0.0], ['2025-11-24T09:01:51', 299864.1, 0.0], ['2025-11-24T09:02:21', 299943.4, 0.0]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Actions/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1' // refer sensor 1 value 
     }
  },{
     name: 'Failures/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
  }
}]
};
myChart1.setOption(option);

