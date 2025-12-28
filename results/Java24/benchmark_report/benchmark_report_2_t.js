
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-12-28T14:22:49', 394469.7, 0.0], ['2025-12-28T14:23:19', 390657.8, 0.0], ['2025-12-28T14:23:49', 395255.2, 0.0]];

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

