import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// TO DO : Moonitoring container
import { Component, OnInit } from '@angular/core';
import * as monitoringActions from './../actions/monitoring.actions';
import * as fromMonitoring from './../reducers';

import * as moment from 'moment';


@Component({
    selector: 'app-monitoring-container',
    template: `
    <app-period [fromDate]="fromDate$ | async" [toDate]="toDate$ | async" (dateRangeChanged)="dateRangeChanged($event)" ></app-period>
    <div *ngIf="measurements$ | async as measurements" class="row">
    <div class="col-md-6">
      <div >
      <app-weight-chart [measurements]="measurements.weight" ></app-weight-chart>          
      </div>
    </div>
    <div class="col-md-6">
    <div >
    <app-temperature-chart [data]="measurements.temperature" ></app-temperature-chart>          
    </div>
  </div>
  <div class="col-md-6">
  <div >
  <app-pain-chart [data]="measurements.pain" ></app-pain-chart>          
  </div> </div>
  <div class="col-md-6">
  <div >
  <app-medication-chart [data]="measurements.medication" ></app-medication-chart>          
  </div>
</div>
    </div>
    <md-progress-spinner *ngIf="loading$ | async" color="primary" mode="indeterminate" value="50">
    </md-progress-spinner>

    
    `,
    styles: [
        `
        :host{
            padding-top:30px;
        }
        md-progress-spinner{
            margin:0 auto;
        }
        `
    ]
})

export class MonitoringContainer implements OnInit {

    loading$: Observable<boolean>;
    measurements$: Observable<any>;
    fromDate$: Observable<any>;
    toDate$: Observable<any>

    startDate: any;
    endDate: any;

    constructor(private store: Store<fromMonitoring.State>) {
        this.loading$ = this.store.select(fromMonitoring.getLoading);
        this.measurements$ = this.store.select(fromMonitoring.getMeasurementsData);
        this.fromDate$ = this.store.select(fromMonitoring.getFromDate);
        this.toDate$ = this.store.select(fromMonitoring.getToDate);
    }

    ngOnInit() {
        let now = moment.now();
        this.startDate = moment(new Date(), 'DD/MM/YYYY').add(-15, 'days').toISOString();
        this.endDate = moment(new Date(), 'DD/MM/YYYY').toISOString();

        // dispatch load data action 
        this.store.dispatch(new monitoringActions.LoadData({ from: this.startDate, to: this.endDate }));
    }


    endHasChanged(newDate) {
        console.log('period has changed ' + newDate);
        console.log('Date with moment : ' + moment(newDate).format('MM/DD/YYYY'));
        this.store.dispatch(new monitoringActions.LoadData({ from: this.startDate, to: this.endDate }));

    }

    startHasChanged(newDate) {
        console.log('period has changed ' + newDate);
    }

    getFromDate() {
        return new Date();
    }


    dateRangeChanged(event) {
        let from = moment(event.start).format('MM/DD/YYYY');
        let to = moment(event.end).format('MM/DD/YYYY');
        console.log(`load data for : ${from} - to - ${to} `);
        this.store.dispatch(new monitoringActions.LoadData({ from, to }));


    }



}