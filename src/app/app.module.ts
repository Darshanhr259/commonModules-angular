import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SideNavsComponent } from './modules/side-navs/side-navs.component';
import { ButtonsComponent } from './modules/buttons/buttons.component';
import { FooterComponent } from './modules/footer/footer.component';
import { InputsComponent } from './modules/inputs/inputs.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppThemeModule } from './app-theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,

        
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
