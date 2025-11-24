
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-24T08:49:43', 300000.0, 0.0], ['2025-11-24T08:50:13', 300000.0, 0.0], ['2025-11-24T08:50:43', 300000.0, 0.0], ['2025-11-24T08:51:13', 299999.9, 0.0], ['2025-11-24T08:51:43', 300000.0, 0.0]];

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

