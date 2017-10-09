import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const serviceEndPoint = "measurements";

@Injectable()
export class MeasurementService {

    private resourceUrl: string;

    constructor(private http: Http) {
        // construct url of the measurements api
        this.resourceUrl = environment.functions.app.url + '/' + serviceEndPoint;
    }


    /**
     * Load measurements for the given time frame
     * 
     * @param {string} startDate 
     * @param {string} endDate 
     * @returns {Observable<any>} 
     * @memberof MeasurementService
     */
    loadMeasurements(startDate: string, endDate: string): Observable<any> {
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set('from', startDate);
        queryParams.set('to', endDate);
        return this.http.get(this.resourceUrl, { params: queryParams }).map(response => response.json());
    }
}