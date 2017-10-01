import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <div class="logo"> 
    <a routerLink="/dashboad" > HEALTH MONITORING</a>
  </div>
  
  `,
  styles: [
    `
    .logo {
      margin-top: 20px; 
      margin-bottom: 30px;     
    }
    .logo a {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.3em;
      color: #202020;
      text-decoration: none;
      display: inline-block;
      pointer-events: auto;
  }
    `
  ]
})
export class LogoComponent {


}
