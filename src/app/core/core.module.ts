import { MeasurementService } from './services/measurement.service';
import { PageNotFoundComponent } from './containers/page-not-found.component';
import { FooterComponent } from './components/footer.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu.component';
import { LogoComponent } from "./components/logo.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [MenuComponent,LogoComponent,FooterComponent,PageNotFoundComponent],
  exports: [MenuComponent,LogoComponent,FooterComponent,PageNotFoundComponent]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [MeasurementService]
    }
  }
}
