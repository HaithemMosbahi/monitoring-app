import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-monitoring-root',
    template: `
        <app-monitoring-container></app-monitoring-container>
    `
})

export class MonitoringRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}