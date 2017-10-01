import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-avatar',
    template: `
    <div class="user-avatar" [mdMenuTriggerFor]="menu" >
    <img width="50"  src="assets/img/avatar.png" />
     <div> Miriam Schulte </div>
     </div>
      <md-menu #menu="mdMenu">
      
      <button md-menu-item>
        <md-icon>voicemail</md-icon>
        <span>Profil</span>
      </button>
      <button md-menu-item>
        <md-icon>notifications_off</md-icon>
        <span>Settings</span>
      </button>
    </md-menu>
    `,
    styles: [
        `
        :host{
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 15px;
            margin-right: 15px;
            font-size: 16px !important;
            color: black;
            cursor: pointer;
        }

        img {
            border-radius: 50%;
        }
       
        `
    ]
})

export class UserAvatarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}