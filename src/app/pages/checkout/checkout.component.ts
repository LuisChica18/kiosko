import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  currentStep: 'invoice' | 'payment' = 'invoice';
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.invoiceForm = this.fb.group({
      name: ['', Validators.required],
      identification: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      phone: ['']
    });
  }

  proceedToPayment(): void {
    if (this.invoiceForm.valid) {
      this.currentStep = 'payment';
    }
  }

  processPayment(): void {
    this.router.navigate(['/process-payment']);
  }

  goBack(): void {
    if (this.currentStep === 'payment') {
      this.currentStep = 'invoice';
    } else {
      this.router.navigate(['/menu']);
    }
  }

}
