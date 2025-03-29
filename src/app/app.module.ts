import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSelectionComponent } from './pages/menu-selection/menu-selection.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProcessPaymentComponent } from './pages/process-payment/process-payment.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    MenuSelectionComponent,
    CartComponent,
    ProcessPaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ConfirmDialogModule,
    TooltipModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration(),
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
