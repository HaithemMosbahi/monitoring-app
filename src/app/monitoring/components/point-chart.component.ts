import { MeasurementData } from './../models/data';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as utils from './chart-utils';

@Component({
    selector: 'app-point-chart',
    template: `
            <md-grid-list cols="5" rowHeight="100px">
                <md-grid-tile colspan="1">
                    <span> <b>{{title}} </b> <br/> {{subTitle}} </span>                
                </md-grid-tile>
                <md-grid-tile colspan="3">
                    <canvas baseChart width="800" height="100"
                        [datasets]="lineChartData"
                        [labels]="lineChartLabels"
                        [options]="options"
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
        `]
})

export class PointChartComponent implements OnInit {

    @Input() title: string;
    @Input() subTitle: string;
    @Input() legendTitle: string;
    @Input() measurements: MeasurementData;
    @Input() showLabels: boolean;

    lineChartLegend: boolean = true;
    lineChartType: string = 'line';
    public lineChartData: Array<any>;
    public lineChartLabels;
    public options: any = utils.pointChartOptions;



    ngOnInit() {
        let values = Object.values(this.measurements.data);
        // the value 50 is only used for the prototype, to center the point
        let chartData = values.map(val => 50);
        let pointStyle = values.map(val => this._generateImage(val));

        // point chart
        this.lineChartData = [
            {
                data: chartData,
                label: this.legendTitle,
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                pointStyle: pointStyle,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false // no line shown
            }
        ];
        this.lineChartLabels = Object.keys(this.measurements.data);


    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['measurements']) {
            if (!changes.measurements.isFirstChange()) {
                this.lineChartLabels = Object.keys(changes.measurements.currentValue.data);
                let values = Object.values(changes.measurements.currentValue.data);
                let chartData = values.map(val => 50);
                let pointStyle = values.map(val => this._generateImage(val));

                this.lineChartData[0].data = chartData;
                this.lineChartData[0].pointStyle = pointStyle;
            }
        }
    }


    _generateImage(value) {
        if (typeof (value) === "boolean") {
            return this._booleanImage(value);
        } else if (typeof (value) === "number") {
            return this._numberImage(value);
        }
        // in production code, we should handle the case of undefined value => return an image
        // when data is undefined
    }


    _booleanImage(value) {
        let img = new Image();
        img.width = 24;
        img.height = 24;
        if (value)
            img.src = 'assets/img/charts/ok.svg';
        else
            img.src = 'assets/img/charts/nok.svg';
        return img;
    }


    _numberImage(imgId) {
        let img = new Image();
        img.src = `assets/img/charts/numbers/${imgId}.png`;
        img.width = 24;
        img.height = 24;
        return img;
    }

    // we use getters to keep template clean
    get status() {
        return this.measurements.status.message;
    }

}
