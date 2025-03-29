import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../interface/cart-item.interface';
import { ConfirmationService } from 'primeng/api';

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
  @Output() clearCart = new EventEmitter<void>();

  constructor(
    private confirmationService: ConfirmationService
  ) {}

  updateItemQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      this.updateQuantity.emit({ item, quantity: newQuantity });
    } else {
      this.removeItem.emit(item);
    }
  }

  processPayment(): void {
    //this.router.navigate(['/process-payment']);
    this.checkout.emit();
  }

  cancelOrder(): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro que deseas cancelar el pedido?',
      header: 'Confirmar Cancelación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('Pedido cancelado');
        this.clearCart.emit();
      }
    });
  }

}
