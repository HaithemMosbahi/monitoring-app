import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-period',
    template: `
 
    <div>
    Monitoring from {{startDate | amDateFormat:'LL' }}  to {{endDate | amDateFormat:'LL' }}
    </div>
    
    <md-form-field>
    <input mdInput [value]="fromDate" (dateChange)="startChange($event)" [mdDatepicker]="fromPicker" placeholder="From">
    <md-datepicker-toggle mdSuffix [for]="fromPicker"></md-datepicker-toggle>
    <md-datepicker #fromPicker></md-datepicker>
  </md-form-field>

  <md-form-field>
  <input mdInput [value]="toDate" (dateChange)="endChange($event)" [mdDatepicker]="toPicker" placeholder="To">
  <md-datepicker-toggle mdSuffix [for]="toPicker"></md-datepicker-toggle>
  <md-datepicker  #toPicker></md-datepicker>
</md-form-field>
  
  
    `,
    styles:[
        `
        div {
            margin-top: 30px;
        }
        `
    ]
})

export class PeriodComponent implements OnInit {

    @Input() fromDate: any;
    @Input() toDate: any;
    @Output() startHasChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() endHasChanged: EventEmitter<any> = new EventEmitter<any>();
    
    startDate:any;
    endDate:any;

    constructor() { }

    ngOnInit() {
        this.startDate =this.fromDate;
        this.endDate = this.toDate;
     }

    startChange(event){
        this.startHasChanged.emit(event.value.toString())
        this.startDate = event.value;
    }

    endChange(event){
        this.endHasChanged.emit(event.value.toString())
        this.endDate = event.value;
    }

}