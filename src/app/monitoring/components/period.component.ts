import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-period',
    template: `
    
    <md-form-field>
    <input mdInput (dateChange)="startChange($event)" [mdDatepicker]="fromPicker" placeholder="From">
    <md-datepicker-toggle mdSuffix [for]="fromPicker"></md-datepicker-toggle>
    <md-datepicker #fromPicker></md-datepicker>
  </md-form-field>

  <md-form-field>
  <input mdInput (dateChange)="endChange($event)" [mdDatepicker]="toPicker" placeholder="To">
  <md-datepicker-toggle mdSuffix [for]="toPicker"></md-datepicker-toggle>
  <md-datepicker  #toPicker></md-datepicker>
</md-form-field>
  

  
    `
})

export class PeriodComponent implements OnInit {

    @Input() fromDate: any;
    @Input() toDate: any;
    @Output() startHasChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() endHasChanged: EventEmitter<any> = new EventEmitter<any>();
    

    constructor() { }

    ngOnInit() { }

    startChange(event){
        this.startHasChanged.emit(event.value.toString())
    }

    endChange(event){
        this.endHasChanged.emit(event.value.toString())
    }

}