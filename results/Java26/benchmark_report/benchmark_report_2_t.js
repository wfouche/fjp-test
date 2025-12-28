
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-12-28T16:29:15', 322569.3, 0.0], ['2025-12-28T16:29:45', 322576.1, 0.0], ['2025-12-28T16:30:15', 319819.8, 0.0]];

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

