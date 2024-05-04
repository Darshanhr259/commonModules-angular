import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalitiesComponent } from './functionalities.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionalitiesComponent,
    children: [
      { path: '', redirectTo:'file-upload', pathMatch:'full' },
      { path: 'file-upload', component:  FileUploadComponent },
      { path: 'pdf-upload', component:  PdfUploadComponent },
    

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalitiesRoutingModule { }
