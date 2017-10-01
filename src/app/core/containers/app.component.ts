import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <app-logo></app-logo>
        <app-menu>
        </app-menu>
        <router-outlet></router-outlet>
        <footer style="margin-top:50px;">
        <app-footer> </app-footer>
        </footer>
        
    `
})
export class AppComponent implements OnInit {


    constructor() {

    }

    ngOnInit(): void {
    }
}
