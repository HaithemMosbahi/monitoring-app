import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-temperature-chart',
  template: `
    <canvas  baseChart width="800" height="200"
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [colors]="lineChartColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        (chartHover)="chartHovered($event)"
        (chartClick)="chartClicked($event)">
    </canvas>
    `,
    styles:[
      `
      canvas {
          display: inherit !important;
      }
      `]
})

export class TemperatureChartComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {

    this.lineChartLabels = Object.keys(this.data.data);
    this.lineChartData = [
      {
        data: Object.values(this.data.data),
        label: 'Series A',
        xAxisID: 'axis1'
      }
    ];

  }


  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels;
  public lineChartOptions: any = {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        id: 'axis1',
        position: 'top',
        gridLines: {
          display: true,
          offsetGridLines: true

        },
        ticks: {
          display: false
        }
      }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            offsetGridLines: true

          }
        }
      ]
    }

  };



  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
    console.log(this.lineChartData.toString());
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  timeFormat = 'MM/DD';
  newDate(days) {
    return moment().add(days, 'd').toDate();
  }
  newDateString(days) {
    return moment().add(days, 'd').format(this.timeFormat);
  }
  newTimestamp(days) {
    return moment().add(days, 'd').unix();
  }


  getData(data, labels) {
    let result = [];
    labels.forEach(label => result.push(data[label]));
    return result;
  }
}
