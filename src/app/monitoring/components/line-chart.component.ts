import { MeasurementData } from './../models/data';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as utils from './chart-utils';

@Component({
    selector: 'app-line-chart',
    template: `
        <md-grid-list cols="5" rowHeight="150px">
            <md-grid-tile colspan="1">
                <div> <b>{{title}} </b> <br/> 
                    <span *showItBootstrap="['xl','lg','sm','md']"> {{subTitle}} </span>
                </div>
            </md-grid-tile>
            <md-grid-tile colspan="3">
                <canvas  baseChart width="800" height="150"
                    [datasets]="lineChartData"
                    [labels]="lineChartLabels"
                    [options]="lineChartOptions"
                    [colors]="lineChartColors"
                    [legend]="lineChartLegend"
                    [chartType]="lineChartType">
                </canvas>
            </md-grid-tile>
            <md-grid-tile *showItBootstrap="['xl','lg','md']" colspan="1">
              <div>
                {{status}}
                </div>
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

export class LineChartComponent implements OnInit, OnChanges {


    @Input() title: string;
    @Input() subTitle: string;
    @Input() legendTitle: string;
    @Input() measurements: MeasurementData;
    @Input() showLabels: boolean = false;

    lineChartLegend: boolean = true;
    lineChartType: string = 'line';
    lineChartColors = utils.chartColors;
    lineChartData: Array<any>;
    lineChartLabels;
    lineChartOptions: any;


    constructor() { }

    ngOnInit() {
        this.lineChartOptions = utils.lineChartOptions(false, true, false, this.showLabels);
        // shows DD/MM as label => this can be configured by adding an input for label format
        // Also we could use long format for big screens, and short format for mobile & ipad screens
        this.lineChartLabels = Object.keys(this.measurements.data).map(date => date.substr(0, 5));
        this.lineChartData = [
            {
                data: Object.values(this.measurements.data),
                label: this.legendTitle,
                xAxisID: 'axis1'
            }
        ];
    }

    // listens to measurements changes 
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['measurements']) {
            if (!changes.measurements.isFirstChange()) {
                this.lineChartLabels = Object.keys(changes.measurements.currentValue.data).map(date => date.substr(0, 5));
                this.lineChartData[0].data = Object.values(changes.measurements.currentValue.data);

            }
        }
    }

    // we use getters to keep template clean
    get status() {
        return this.measurements.status.message;
    }


}