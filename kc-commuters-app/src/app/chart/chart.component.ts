import { Component, OnInit } from '@angular/core';
// import { HighchartsChartComponent } from 'highcharts-angular';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';


declare var require: any;
// tslint:disable-next-line: prefer-const
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  let jsonUrl = ['https://raw.githubusercontent.com/jamiander/interview/master/frontend-engineer/kc-neighborhoods.json',
  'https://raw.githubusercontent.com/jamiander/interview/master/frontend-engineer/kc-tracts.json'];
  let chartRender = ['chartA', 'chartB'];
  let chartTitle = ['Commuter Data by Neighborhood', 'Commuter Data by Tract'];

  for (let i = 0; i < 2; i++) {
    let chart = null;
    let title = null;
    let jsonData = (function() {
    let jsonData = null;
    $.ajax({
        async: false,
        global: false,
        url: jsonUrl[i],
        dataType: 'json',
        success: function(data) {
          jsonData = data;
        }
      });
    chart = chartRender[i];
    title = chartTitle[i];
    chartArrays(jsonData);
  })();


    function chartArrays(json) {
      const jsonLen = Object.keys(json.features).length;
      const nhIds = new Array();
      const daData = new Array();
      const dcData = new Array();
      const ptData = new Array();
      const wData = new Array();

      for (let j = 0; j < jsonLen; j++) {
        nhIds.push(json.features[j].properties.id);
        daData.push(json.features[j].properties['pop-commute-drive_alone']);
        dcData.push(json.features[j].properties['pop-commute-drive_carpool']);
        ptData.push(json.features[j].properties['pop-commute-public_transit']);
        wData.push(json.features[j].properties['pop-commute-walk']);
      }

      Highcharts.chart(chart, {
  chart: {
     type: 'column'
   },
  title: {
    text: title
  },
  plotOptions: {
     series: {
       stacking: 'normal'
     }
   },
  xAxis: {
     categories: nhIds
   },
  series: [
     {type: 'column',
     name: 'Drive-Alone',
     data: daData
     },
     {type: 'column',
     name: 'Drive-Carpool',
     data: dcData
     },
     {type: 'column',
     name: 'Public-Transit',
     data: ptData
     },
     {type: 'column',
     name: 'Walk',
     data: wData
     }
   ]
  });
  }
  }
}
}
