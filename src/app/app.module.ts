import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSelectionComponent } from './pages/menu-selection/menu-selection.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProcessPaymentComponent } from './pages/process-payment/process-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    MenuSelectionComponent,
    CartComponent,
    ProcessPaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
