import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weight-chart',
    template: `
       Weight chart works ! 
    `
})

export class WeightChartComponent implements OnInit {

    @Input() data: any;

    constructor() { }

    ngOnInit() { }
}