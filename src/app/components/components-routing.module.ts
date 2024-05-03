import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsComponent } from './components.component';
import { InputsComponent } from './inputs/inputs.component';
import { LoadersComponent } from './loaders/loaders.component';
import { ModelsComponent } from './models/models.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo:'buttons', pathMatch:'full' },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'headers', component: HeaderComponent },
      { path: 'inputs', component: InputsComponent },
      { path: 'loaders', component: LoadersComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'side-nav', component: SidenavComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'tabs', component: SidenavComponent },
      { path: 'tosters', component: SidenavComponent },

    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
