import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// TO DO : Moonitoring container
import { Component, OnInit } from '@angular/core';
import * as monitoringActions from './../actions/monitoring.actions';
import * as fromMonitoring from './../reducers';

@Component({
    selector: 'app-monitoring-container',
    template: `
    <app-period (startHasChanged)="startHasChanged($event)"
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
  </div>
  <div class="col-md-6">
  <div >
  <app-medication-chart [data]="measurements.pain" ></app-medication-chart>          
  </div>
</div>
    </div>
    <md-progress-spinner *ngIf="loading$ | async" color="primary" mode="indeterminate" value="50">
    </md-progress-spinner>
    `,
    styles: [
        `
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

    constructor(private store: Store<fromMonitoring.State>) {
        this.loading$ = this.store.select(fromMonitoring.getLoading);
        this.measurements$ = this.store.select(fromMonitoring.getMeasurementsData);
        this.fromDate = this.store.select(fromMonitoring.getFromDate);
        this.toDate = this.store.select(fromMonitoring.getToDate);
    }

    ngOnInit() {
        let from = new Date();
        let to = new Date().setDate(from.getDate() + 15);
        // dispatch load data action 
        this.store.dispatch(new monitoringActions.LoadData({ from, to }));
    }


    endHasChanged(newDate){
        console.log('period has changed '+newDate);
    }

    startHasChanged(newDate){
        console.log('period has changed '+newDate);
    }
    
    
}