import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../interface/cart-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() cartItems: CartItem[] = [];
  @Input() totalAmount: number = 0;
  @Output() removeItem = new EventEmitter<CartItem>();
  @Output() updateQuantity = new EventEmitter<{item: CartItem, quantity: number}>();
  @Output() checkout = new EventEmitter<void>();

  constructor(private router: Router) {}

  updateItemQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      this.updateQuantity.emit({ item, quantity: newQuantity });
    } else {
      this.removeItem.emit(item);
    }
  }

  processPayment(): void {
    this.router.navigate(['/process-payment']);
  }

}
