import { PointChartComponent } from './components/point-chart.component';
import { LineChartComponent } from './components/line-chart.component';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { TimeFrameComponent } from './components/time-frame.component';
import { ChartsModule } from 'ng2-charts';
import { MonitoringEffects } from './effects/monitoring.effects';
import { MonitoringContainer } from './containers/monitoring-container.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringRootComponent } from './containers/monitoring-root.component';
import { SharedModule } from './../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { reducers } from './reducers';

// Component for date range selection 
import { MyDateRangePickerModule } from 'mydaterangepicker';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    MonitoringRoutingModule,
    StoreModule.forFeature('monitoring', reducers),
    EffectsModule.forFeature([MonitoringEffects]),
    ChartsModule,
    MomentModule,
    MyDateRangePickerModule,
    FormsModule

  ],
  providers: [],
  declarations: [MonitoringRootComponent, LineChartComponent, PointChartComponent,
    MonitoringContainer, TimeFrameComponent]
})
export class MonitoringModule { }
