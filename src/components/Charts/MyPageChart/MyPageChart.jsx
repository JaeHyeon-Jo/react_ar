import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import drilldown from 'highcharts-drilldown';
drilldown(Highcharts);

// Create the chart
const config = {
  chart: {
    type: 'pie'
  },
  title: {
      text: '나의 투자 현황'
  },
  subtitle: {
      text: 'Click the slices to v iew detail.'
  },
  plotOptions: {
      series: {
          dataLabels: {
              enabled: true,
              format: '{point.name}: {point.y:.1f}%'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
          name: 'Stock',
          y: 50,
          drilldown: 'Stock'
      }, {
          name: 'Coin',
          y: 30,
          drilldown: 'Coin'
      }, {
          name: 'Cash',
          y: 20,
          drilldown: null
      }]
  }],
  drilldown: {
      series: [{
          name: 'Stock',
          id: 'Stock',
          data: [
              ['Samsung', 24.13],
              ['ARBITER', 17.2],
              ['NAVER', 8.11],
              ['FACEBOOK', 5.33]             
          ]
      }, {
          name: 'Coin',
          id: 'Coin',
          data: [
              ['BTC', 20],
              ['ETH', 20],
              ['ARC', 60]
          ]
      }]
  }
};
 
class MyPageChart extends Component {
    render() {
        return (
            <div>
                <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
            </div>
        );
    }
}
 
export {MyPageChart};