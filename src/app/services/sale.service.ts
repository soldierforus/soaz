import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

constructor() { }
  
  timeRemaining(targetDate: Date): { days: number; hours: number, over?: boolean } {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    // Check if the target date has already passed
    if (timeDiff < 0) {
        return {
            days: 0,
            hours: 0,
            over: true,
        };
    }

    // Calculate the remaining time in milliseconds
    const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return {
        days: remainingDays,
        hours: remainingHours
    };
  }
}
