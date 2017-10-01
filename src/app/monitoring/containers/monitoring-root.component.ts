import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-catalog-root',
    template: `
        Monitoring module works !
        <div class="row">
        <div class="col-md-6">
          <div style="display: block;">
          <app-weight-chart></app-weight-chart>          
          </div>
        </div>
        </div>
    `
})

export class MonitoringRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}