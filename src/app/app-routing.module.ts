import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'components', pathMatch: 'full' },
  {
    path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) 
  },
  {
    path: 'functionalities', loadChildren: () => import('./functionalities/functionalities.module').then(m => m.FunctionalitiesModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
