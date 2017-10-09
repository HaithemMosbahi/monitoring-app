import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-time-frame',
    template: `
         <div>
            Monitoring from {{fromDate | amDateFormat:'LL' }}  to {{toDate | amDateFormat:'LL' }}
         </div>
    
         <my-date-range-picker name="mydaterange" [options]="dateRangeOptions"
                               [(ngModel)]="dateRangeModel"
                               (dateRangeChanged)="onDateRangeChanged($event)" required>
         </my-date-range-picker>
  
    `,
    styles: [
        `
        div {
            margin-top: 30px;
            margin-bottom: 15px;
        }

        my-date-range-picker{
            margin-bottom: 10px;
        }
        `
    ]
})

export class TimeFrameComponent implements OnInit {

    @Input() fromDate: any;
    @Input() toDate: any;
    @Output() dateRangeChanged: EventEmitter<any> = new EventEmitter<any>();

    dateRangeModel: Object
    dateRangeOptions = {
        dateFormat: 'mm/dd/yyyy',
    };

    constructor() { }

    ngOnInit() {
        let from = moment(this.fromDate);
        let to = moment(this.toDate);
        let beginDate = { year: from.year(), month: from.month() + 1, day: from.date() };
        let endDate = { year: to.year(), month: to.month() + 1, day: to.date() };
        // construct date range model using shorthand object
        this.dateRangeModel = { beginDate, endDate }

    }

    /**
     * Fired when the date range has changed 
     * 
     * @param {any} event 
     * @memberof PeriodComponent
     */
    onDateRangeChanged(event) {
        this.dateRangeChanged.emit({ start: event.beginJsDate, end: event.endJsDate });
    }


}