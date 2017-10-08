import { MonitoringModule } from './monitoring/monitoring.module';
import { HttpModule } from '@angular/http';
import { CustomRouterStateSerializer } from './shared/utils/router-utils';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './core/containers/app.component';

import {AvatarModule} from 'ngx-avatar'
import { environment } from '../environments/environment';

import { MomentModule } from 'angular2-moment';
import { MyDateRangePickerModule } from 'mydaterangepicker';


import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// App related imports 
import { reducers, metaReducers } from "./core/reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CoreModule.forRoot(),
    MonitoringModule,
    HttpModule,
    MyDateRangePickerModule,

    /**
     * ngrx store root 
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
   * @ngrx/router-store keeps router state up-to-date in the store.
   */
    StoreRouterConnectingModule,

    // Add side effects 
    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    AvatarModule,
    MomentModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    {provide: LOCALE_ID, useValue: 'fr-FR'}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
