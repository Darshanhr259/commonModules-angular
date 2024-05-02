import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InputsComponent } from './inputs/inputs.component';
import { HeaderComponent } from './header/header.component';
import { LoadersComponent } from './loaders/loaders.component';
import { ModelsComponent } from './models/models.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { TostersComponent } from './tosters/tosters.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppThemeModule } from '../app-theme.module';





@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    InputsComponent,
    HeaderComponent,
    LoadersComponent,
    ModelsComponent,
    PaginationComponent,
    SidenavComponent,
    TablesComponent,
    TabsComponent,
    TostersComponent,
   
   
    
   
  ],
  imports: [
    CommonModule,
    AppThemeModule,
    ComponentsRoutingModule,
    RouterModule.forChild([{path:'', component:ComponentsComponent }])
  ]
})
export class ComponentsModule { }
