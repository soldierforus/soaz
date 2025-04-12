import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { SaleService } from './services/sale.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'soazsites';
  saleEnds!: any;
  
  constructor(private saleService: SaleService) {
    this.saleEnds = this.saleService.timeRemaining(new Date ('2025-04-01T23:59:59'))
  }
  


  
  // // Example usage:
  // const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date here
  // const remaining = timeRemaining(targetDate);
  // console.log(`Remaining: ${remaining.days} days and ${remaining.hours} hours`);
}
