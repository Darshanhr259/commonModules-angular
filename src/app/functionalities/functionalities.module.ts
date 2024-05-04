import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { FunctionalitiesComponent } from './functionalities.component';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AppThemeModule } from '../app-theme.module';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';


@NgModule({
  declarations: [
    FunctionalitiesComponent,
    FileUploadComponent,
    PdfUploadComponent,
  ],
  imports: [
    CommonModule,
    FunctionalitiesRoutingModule,
    AppThemeModule,
    RouterModule.forChild([{path:'', component: FunctionalitiesComponent}])
  ]
})
export class FunctionalitiesModule { }
