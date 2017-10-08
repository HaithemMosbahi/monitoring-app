import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { PeriodComponent } from './components/period.component';
import { PainChartComponent } from './components/pain-chart.component';
import { SymptomsChartComponent } from './components/symptoms-chart.component';
import { TemperatureChartComponent } from './components/temperature-chart.component';
import { DiarrheaChartComponent } from './components/diarrhea.component';
import { MedicationChartComponent } from './components/medication.component';
import { ChartsModule } from 'ng2-charts';
import { MonitoringEffects } from './effects/monitoring.effects';
import { MonitoringContainer } from './containers/monitoring-container.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringRootComponent } from './containers/monitoring-root.component';
import { WeightChartComponent } from './components/weight-chart.component';
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
  declarations: [MonitoringRootComponent,
    MonitoringContainer, WeightChartComponent, MedicationChartComponent, DiarrheaChartComponent,
    PainChartComponent, TemperatureChartComponent, SymptomsChartComponent,
    PeriodComponent]
})
export class MonitoringModule { }
