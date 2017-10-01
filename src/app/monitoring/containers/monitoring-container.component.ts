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
    <app-period [fromDate]="startDate" [toDate]="endDate" (startHasChanged)="startHasChanged($event)"
    (endHasChanged)="endHasChanged($event)" ></app-period>
    <div *ngIf="measurements$ | async as measurements" class="row">
    <div class="col-md-6">
      <div >
      <app-weight-chart [data]="measurements.weight" ></app-weight-chart>          
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
    fromDate: Observable<any>;
    toDate: Observable<any>

    startDate : any;
    endDate: any;

    constructor(private store: Store<fromMonitoring.State>) {
        this.loading$ = this.store.select(fromMonitoring.getLoading);
        this.measurements$ = this.store.select(fromMonitoring.getMeasurementsData);
        this.fromDate = this.store.select(fromMonitoring.getFromDate);
        this.toDate = this.store.select(fromMonitoring.getToDate);
    }

    ngOnInit() {
        let now = moment.now();
        this.startDate =  moment(new Date(),'DD/MM/YYY').add(-15,'days').toISOString();
        this.endDate = moment(new Date(),'DD/MM/YYY').toISOString();

        // dispatch load data action 
        this.store.dispatch(new monitoringActions.LoadData({ from:this.startDate, to:this.endDate }));
    }


    endHasChanged(newDate){
        console.log('period has changed '+newDate);
    }

    startHasChanged(newDate){
        console.log('period has changed '+newDate);
    }

    getFromDate(){
        return new Date();
    }
    
    
}