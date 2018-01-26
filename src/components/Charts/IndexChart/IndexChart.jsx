import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';

// Create the chart
const config = {
  
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Earning Rate'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
};
 
class IndexChart extends Component {
    render() {
        return (
            <div>
                <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
            </div>
        );
    }
}
 
export {IndexChart};