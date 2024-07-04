import {  NgModule } from '@angular/core';
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
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000, // 15 seconds
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

        
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    MessageService
  ],
  
  bootstrap: [AppComponent],

})
export class AppModule { }
