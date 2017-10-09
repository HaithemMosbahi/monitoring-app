import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// TO DO : Moonitoring container
import { Component, OnInit } from '@angular/core';
import * as monitoringActions from './../actions/monitoring.actions';
import * as fromMonitoring from './../reducers';
import * as fromMonitoringState from './../reducers/monitoring';

import * as moment from 'moment';


@Component({
    selector: 'app-monitoring-container',
    template: `
        <app-time-frame [fromDate]="fromDate$ | async"
                        [toDate]="toDate$ | async"
                        (dateRangeChanged)="dateRangeChanged($event)">
        </app-time-frame>
        <div *ngIf="measurements$ | async as measurements" class="row">
            <div class="col-md-6">
                <div>
                    <app-line-chart [showLabels]="true" title="Weight"
                                 subTitle="(Kg)" legendTitle="Weight"
                                 [measurements]="measurements.weight" >
                    </app-line-chart>          
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <app-line-chart  title="Body Temperature"
                                subTitle="(°C)" legendTitle="Temperature"
                                [measurements]="measurements.temperature">
                    </app-line-chart>          
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <app-line-chart  title="Pain Level" subTitle="(1-10)"
                                legendTitle="pain level" 
                                [measurements]="measurements.pain" >
                    </app-line-chart>         
                 </div>
             </div>
             <div class="col-md-6">
                <div>
                     <app-point-chart title="Diarrhea"
                                subTitle="(Bristol-Stool-Scale Type)" 
                                legendTitle="Diarrhea" [measurements]="measurements.diarrhea">
                    </app-point-chart>          
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <app-point-chart title="Further symptoms" subTitle=""
                                 legendTitle="Further symptoms"
                                 [measurements]="measurements.symptoms">
                    </app-point-chart>          
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <app-point-chart title="Medication compliance" subTitle=""
                                 legendTitle="Medication"
                                [measurements]="measurements.medication">
                    </app-point-chart>          
                </div>
            </div>
  
        </div>
        <md-progress-spinner *ngIf="loading$ | async"
                             color="primary" mode="indeterminate" value="50">
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
        // Get initiat start and end dates from the initial state        
        this.startDate = fromMonitoringState.getInitialStartDate();
        this.endDate = fromMonitoringState.getInitialEndDate();

        // dispatch load data action 
        this.store.dispatch(new monitoringActions.LoadData({ from: this.startDate, to: this.endDate }));
    }


    dateRangeChanged(event) {
        let from = moment(event.start).format('MM/DD/YYYY');
        let to = moment(event.end).format('MM/DD/YYYY');
        // dispatch load data action when date range changes.
        this.store.dispatch(new monitoringActions.LoadData({ from, to }));

    }



}