import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../interface/cart-item.interface';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  currentStep: 'invoice' | 'payment' = 'invoice';
  invoiceForm: FormGroup;
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private fb: FormBuilder,
     private router: Router,
     private cartService: CartService
    ) {
    this.invoiceForm = this.fb.group({
      name: ['', Validators.required],
      identification: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.totalAmount$.subscribe(total => {
      this.totalAmount = total;
    });
  }

  proceedToPayment(): void {
    if (this.invoiceForm.valid) {
      this.currentStep = 'payment';
    }
  }

  processPayment(type: 'cash' | 'card'): void {
    localStorage.setItem('paymentType', type);
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
