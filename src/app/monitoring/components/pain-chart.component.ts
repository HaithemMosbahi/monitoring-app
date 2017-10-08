import { MeasurementData } from './../models/data';
import { Component, OnInit, Input,OnChanges,SimpleChanges, } from '@angular/core';
import * as moment from 'moment';
import * as utils from './chart-utils';
@Component({
  selector: 'app-pain-chart',
  template: `
  <md-grid-list cols="5" rowHeight="200px">
  <md-grid-tile colspan="1">
    Pain Level ( 1 - 10 )
  </md-grid-tile>
  <md-grid-tile colspan="3">
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
      `]
})

export class PainChartComponent implements OnInit,OnChanges {

  @Input() measurements: MeasurementData;
  lineChartLegend: boolean = true;
  lineChartType: string = 'line';
  lineChartColors = utils.chartColors;  
  lineChartData: Array<any>;
  lineChartLabels;
  lineChartOptions: any = utils.lineChartOptions(false,true,false,false);

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
  
  // we use getters to keep template clean
  get status() {
    return this.measurements.status.message;
  }

}
