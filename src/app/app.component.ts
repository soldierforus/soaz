import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soazsites';
  saleEnds = this.timeRemaining(new Date ('2025-04-01T23:59:59'))
  
  timeRemaining(targetDate: Date): { days: number; hours: number } {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();
  
    // Calculate the remaining time in milliseconds
    const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    return {
        days: remainingDays,
        hours: remainingHours
    };
  }
  
  // // Example usage:
  // const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date here
  // const remaining = timeRemaining(targetDate);
  // console.log(`Remaining: ${remaining.days} days and ${remaining.hours} hours`);
}
