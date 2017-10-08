import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-symptoms-chart',
  template: `
    <md-grid-list cols="5" rowHeight="100px">
    <md-grid-tile colspan="1">
      <b>Further symptoms</b>
    </md-grid-tile>
    <md-grid-tile colspan="3">
      <canvas baseChart width="800" height="100"
      [datasets]="lineChartData"
      [labels]="lineChartLabels"
      [options]="options"
      [chartType]="lineChartType"></canvas>
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
  
        .circle {
          backgournd-color:red;
        }
  
        .check-img {
         color: yellow; 
        }
        `]
})
export class SymptomsChartComponent implements OnInit, OnChanges {

  @Input() data: any;


  constructor() { }

  ngOnInit() {
    let values = Object.values(this.data.data);
    let chartData = values.map(val => 50);
    let pointStyle = values.map(val => this._generateImage(val));

    // point chart
    this.lineChartData = [
      {
        data: chartData,
        backgroundColor: 'red',
        borderColor: 'red',
        fill: false,
        pointStyle: pointStyle,
        showLine: false // no line shown
      }
    ];
    this.lineChartLabels = Object.keys(this.data.data);


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      if (!changes.data.isFirstChange()) {
        this.lineChartLabels = Object.keys(changes.data.currentValue.data);
        let values = Object.values(changes.data.currentValue.data);
        let chartData = values.map(val => 50);
        let pointStyle = values.map(val => this._generateImage(val));

        this.lineChartData[0].data = chartData;
        this.lineChartData[0].pointStyle = pointStyle;
      }
    }
  }


  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels;
  public options: any = {
    responsive: false,
    title: {
      display: false
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        //pointStyle: 'sun'
      }
    },
    scales: {
      xAxes: [{
        id: 'axis1',
        display: true,
        position: 'top',
        gridLines: {
          display: true,
          offsetGridLines: true

        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: true,
          offsetGridLines: true

        },
        ticks: {
          display: false
        }
      }]
    }
  }

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  /**
   * Generate image element based on the given value
   * 
   * @param {any} value 
   * @returns 
   * @memberof SymptomsChartComponent
   */
  _generateImage(value) {
    if (typeof (value) === "boolean") {
      if (value) {
        return this._okImage();
      } else {
        return this._notOkImage();
      }
    }
  }

  _okImage() {
    let img = new Image();
    img.src = 'assets/img/charts/check_circle_24px.svg';
    return img;
  }

  _notOkImage() {
    let img = new Image();
    img.src = 'assets/img/charts/close-circle.svg';
    img.width = 24;
    img.height = 24;
    img.className = 'check-img';
    img.setAttribute("style", "background-color:green;font-size:32px");
    return img;
  }

  get status() {
    return this.data.status.message;
  }
}
