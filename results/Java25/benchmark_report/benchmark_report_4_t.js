
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2026-01-23T23:17:37', 553413.6, 0.0], ['2026-01-23T23:18:07', 554683.3, 0.0], ['2026-01-23T23:18:37', 554779.7, 0.0]];

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

