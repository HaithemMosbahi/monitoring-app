import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MeasurementService {

    constructor(private http: Http) { }

    getMeasurements(): Observable<any> {
        return this.http.get('assets/data.json').map(response => response.json());

    }

    getWeightMeasurement(): Observable<any> {
        return this.http.get('assets/data.json').map(response => response.json().weight);
    }

    getTemperatureMesasurement(): Observable<any> {
        return this.http.get('assets/data.json').map(response => response.json().temperature);
    }

    getPainLevelMeasurement(): Observable<any> {
        return this.http.get('assets/data.json').map(response => response.json().pain);
    }
}