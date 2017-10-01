
import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule 
  ]
})
export class MaterialModule {}