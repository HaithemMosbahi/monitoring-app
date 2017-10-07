import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const serviceEndPoint = "measurements";

@Injectable()
export class MeasurementService {

    private resourceUrl:string;

    constructor(private http: Http) { 
        this.resourceUrl = environment.functions.app.url +'/'+serviceEndPoint;
        this.fetchData('10/10/2017','11/11/2017').subscribe(data => {
            console.log('data '+JSON.stringify(data));
        });
    }

    getMeasurements(): Observable<any> {
        return this.http.get('assets/data/measurements.json').map(response => response.json());

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

    fetchData(startDate:string,endDate:string){
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set('from', startDate);
        queryParams.set('to', endDate);
        return this.http.get(this.resourceUrl,{params:queryParams}).map(response => response.json())
                        .do(data => console.log(JSON.stringify(data)));
    }
}