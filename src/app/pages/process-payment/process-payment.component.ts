import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-payment',
  templateUrl: './process-payment.component.html',
  styleUrl: './process-payment.component.css'
})
export class ProcessPaymentComponent implements OnInit {
  paymentStatus: 'processing' | 'success' | 'error' = 'processing';
  timer: number = 5;
  private intervalId: any;
  randomNumber: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.simulatePaymentProcess();
    this.randomNumber = Math.floor(Math.random() * 1000) + 1000;
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
          this.router.navigate(['/']);
        }, 3000);
      }
    }, 1000);
  }

}
