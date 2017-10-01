import { MonitoringRootComponent } from './containers/catalog-root.component';
import { SharedModule } from './../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* import { reducers } from './reducers';
 */
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    //StoreModule.forFeature('monitoring', reducers),
    //EffectsModule.forFeature([MonitoringEffects])

  ],
  providers: [],
  declarations: [MonitoringRootComponent]
})
export class MonitoringModule { }
