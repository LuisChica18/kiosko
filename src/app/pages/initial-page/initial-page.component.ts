import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {

  constructor(private router: Router) {}

  navigateToMenu(type: 'dineIn' | 'takeaway'): void {
    // You can store the order type in a service if needed
    this.router.navigate(['/menu']);
  }

}
