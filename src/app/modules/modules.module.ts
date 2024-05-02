import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from '../app-theme.module';
import { ModulesRoutingModule } from './modules-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTooltipModule
  
  ]
})
export class ModulesModule { }
