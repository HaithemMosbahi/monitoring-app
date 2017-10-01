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

// TO DO : Add effetcs for the monitoring module

@Injectable()
export class MonitoringEffects {

    constructor(private actions$: Actions, private router: Router) { }

}