
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-12-28T14:09:35', 538646.0, 0.0], ['2025-12-28T14:10:05', 538475.1, 0.0], ['2025-12-28T14:10:35', 537995.6, 0.0]];

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

