import { UserAvatarComponent } from './components/user-avatar.component';
import { AvatarModule } from 'ngx-avatar';
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
    SharedModule,
    AvatarModule
  ],
  declarations: [MenuComponent,LogoComponent,FooterComponent,PageNotFoundComponent,UserAvatarComponent],
  exports: [MenuComponent,LogoComponent,FooterComponent,PageNotFoundComponent,UserAvatarComponent]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [MeasurementService]
    }
  }
}
