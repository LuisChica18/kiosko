import { Component, OnInit } from '@angular/core';
import { Category } from './../../interface/category.interface';
import { CartItem } from '../../interface/cart-item.interface';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrl: './menu-selection.component.css'
})
export class MenuSelectionComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  categories: Category[] = [
    {
      id: 1,
      name: 'Combos',
      icon: 'pi pi-star',
      items: [
        {
          id: 1,
          name: 'Combo Familiar',
          description: '8 piezas de pollo, papas y bebidas',
          price: 24.99,
          image: 'assets/combo-familiar.jpg'
        },
        {
          id: 2,
          name: 'Combo Pareja',
          description: '4 piezas de pollo, 2 papas y 2 bebidas',
          price: 15.99,
          image: 'assets/combo-pareja.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Pollos',
      icon: 'pi pi-box',
      items: [
        {
          id: 3,
          name: 'Pollo Entero',
          description: '8 piezas de pollo',
          price: 18.99,
          image: 'assets/pollo-entero.jpg'
        },
        {
          id: 4,
          name: 'Medio Pollo',
          description: '4 piezas de pollo',
          price: 10.99,
          image: 'assets/medio-pollo.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'Complementos',
      icon: 'pi pi-certificate',
      items: [
        {
          id: 5,
          name: 'Papas Fritas',
          description: 'Porción grande de papas fritas',
          price: 4.99,
          image: 'assets/papas-fritas.jpg'
        },
        {
          id: 6,
          name: 'Ensalada',
          description: 'Ensalada fresca de la casa',
          price: 3.99,
          image: 'assets/ensalada.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'Bebidas',
      icon: 'pi pi-glass',
      items: [
        {
          id: 7,
          name: 'Refresco',
          description: 'Bebida gaseosa 500ml',
          price: 2.99,
          image: 'assets/refresco.jpg'
        },
        {
          id: 8,
          name: 'Agua Mineral',
          description: 'Agua mineral 500ml',
          price: 1.99,
          image: 'assets/agua.jpg'
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  constructor() { }

  ngOnInit(): void {
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0];
    }
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  get cartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
      this.cartItems.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        totalPrice: item.price
      });
    }

    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  }



  updateCartItemQuantity(event: {item: CartItem, quantity: number}): void {
    const cartItem = this.cartItems.find(i => i.id === event.item.id);
    if (cartItem) {
      cartItem.quantity = event.quantity;
      cartItem.totalPrice = cartItem.price * cartItem.quantity;
      this.calculateTotal();
    }
  }

  removeCartItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.calculateTotal();
  }

  proceedToCheckout(): void {
    // Implement checkout logic here
    console.log('Proceeding to checkout with items:', this.cartItems);
  }

}