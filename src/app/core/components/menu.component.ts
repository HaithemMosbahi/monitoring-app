import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <nav md-tab-nav-bar aria-label="weather navigation links">
     <a md-tab-link *ngFor="let routeLink of routeLinks; let i = index"
      [routerLink]="routeLink.link" [active]="activeLinkIndex === i"
      (click)="activeLinkIndex = i">
      {{routeLink.label}}
    </a>
  </nav>
  `,
  styles: [`
    :host{
      margin-top:30px;
    }
  `]
})
export class MenuComponent {

  routeLinks: any[];
  activeLinkIndex = 1;
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Dashboard', link: '/dashboard' },
      { label: 'Monitoring', link: '/monitoring' },
      { label: 'Profil', link: '/user/profil' }];
  }

}
