import { MeasurementService } from './../../core/services/measurement.service';
import { Router } from '@angular/router';;
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import * as monitoringActions from './../actions/monitoring.actions';

// TO DO : Add effetcs for the monitoring module

@Injectable()
export class MonitoringEffects {

    constructor(private actions$: Actions, private measurementService: MeasurementService) { }

    @Effect()
    loadMeasurement$ = this.actions$
        .ofType(monitoringActions.LOAD_DATA)
        //.delay(2000)
        .map((action: monitoringActions.LoadData) => action.payload)
        .mergeMap(payload => this.measurementService.getMeasurements(payload.from, payload.to))
        .map(measurements => new monitoringActions.LoadDataSuccess(measurements))
        .catch((err) => of(new monitoringActions.LoadDataFail({ error: err.message })));
}