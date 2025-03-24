import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { MenuSelectionComponent } from './pages/menu-selection/menu-selection.component';
import { ProcessPaymentComponent } from './pages/process-payment/process-payment.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'menu', component: MenuSelectionComponent },
  { path: 'process-payment', component: ProcessPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
