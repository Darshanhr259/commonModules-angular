import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { FunctionalitiesComponent } from './functionalities.component';
import { ImageToBase64Component } from './image-to-base64/image-to-base64.component';


@NgModule({
  declarations: [
    FunctionalitiesComponent,
    ImageToBase64Component
  ],
  imports: [
    CommonModule,
    FunctionalitiesRoutingModule
  ]
})
export class FunctionalitiesModule { }
