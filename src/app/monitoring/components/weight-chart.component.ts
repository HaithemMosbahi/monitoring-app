import { MeasurementData } from './../models/data';
import { Component, OnInit, Input,OnChanges,SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-weight-chart',
  template: `
    <md-grid-list cols="5" rowHeight="200px">
    <md-grid-tile colspan="1">
      <span>Weight ( Kg )</span>
    </md-grid-tile>
    <md-grid-tile colspan="3">
    <canvas  baseChart width="800" height="200"
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [colors]="lineChartColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType">
    </canvas>
    </md-grid-tile>
    <md-grid-tile colspan="1">
    {{status}}
    </md-grid-tile>
  </md-grid-list>
    `,
  styles: [
    `
        canvas {
            display: inherit !important;
        }
        `
  ]
})

export class WeightChartComponent implements OnInit,OnChanges {
  
  @Input() measurements: MeasurementData;

  lineChartData: Array<any>;
  lineChartLabels;
  lineChartOptions: any = {
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


  constructor() { }

  ngOnInit() {

    this.lineChartLabels = Object.keys(this.measurements.data);
    this.lineChartData = [
      {
        data: Object.values(this.measurements.data),
        label: 'Series A',
        xAxisID: 'axis1'
      }
    ];

  }

  ngOnChanges(changes: SimpleChanges): void {
     if(changes['measurements']){
       if(!changes.measurements.isFirstChange()){
        this.lineChartLabels = Object.keys(changes.measurements.currentValue.data);
        this.lineChartData[0].data = Object.values(changes.measurements.currentValue.data);
        
       }
     }
  }






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


  // we use getters to keep template clean
  get status() {
    return this.measurements.status.message;
  }


}
