import { Injectable } from "@angular/core";
import { CartItem } from "../interface/cart-item.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private totalAmount = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItems.asObservable();
  totalAmount$ = this.totalAmount.asObservable();

  updateCart(items: CartItem[]) {
    this.cartItems.next(items);
    this.calculateTotal(items);
  }

  private calculateTotal(items: CartItem[]) {
    const total = items.reduce((sum, item) => sum + item.totalPrice, 0);
    this.totalAmount.next(total);
  }

  clearCart() {
    this.cartItems.next([]);
    this.totalAmount.next(0);
  }
}
