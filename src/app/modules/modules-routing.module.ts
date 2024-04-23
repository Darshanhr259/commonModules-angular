import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'buttons', loadComponent: () => import('./buttons/buttons.component').then(m => m.ButtonsComponent) },
  { path: 'footer', loadComponent: () => import('./footer/footer.component').then(m => m.FooterComponent) },
  { path: 'header', loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent) },
  { path: 'inputs', loadComponent: () => import('./inputs/inputs.component').then(m => m.InputsComponent) },
  { path: 'side-navs', loadComponent: () => import('./side-navs/side-navs.component').then(m => m.SideNavsComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
