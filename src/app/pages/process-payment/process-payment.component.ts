import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import * as QRCode from 'qrcode';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-process-payment',
  templateUrl: './process-payment.component.html',
  styleUrl: './process-payment.component.css'
})
export class ProcessPaymentComponent implements OnInit {
  paymentStatus: 'qr' | 'processing' | 'success' | 'error' = 'qr';
  paymentType: 'cash' | 'card' = 'cash';
  timer: number = 5;
  private intervalId: any;
  randomNumber: number = 0;
  qrCodeUrl: string = '';
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.randomNumber = Math.floor(Math.random() * 1000) + 1000;
    this.paymentType = localStorage.getItem('paymentType') as 'cash' | 'card' || 'cash';
    if (this.paymentType === 'card') {
      this.paymentStatus = 'processing';
      this.simulatePaymentProcess();
    } else {
      this.cartService.totalAmount$.subscribe(total => {
        this.totalAmount = total;
        this.generateQRCode();
      });
    }
  }

  private async generateQRCode(): Promise<void> {
    const qrData = environment.deUnaQrUrl;
    try {
      this.qrCodeUrl = await QRCode.toDataURL(qrData);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  }

  startPaymentProcess(): void {
    this.paymentStatus = 'processing';
    this.simulatePaymentProcess();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private simulatePaymentProcess(): void {
    this.intervalId = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.intervalId);
        this.paymentStatus = 'success';
        setTimeout(() => {
          this.cartService.clearCart();
          this.router.navigate(['/']);
        }, 3000);
      }
    }, 1000);
  }

  goBackToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

}
