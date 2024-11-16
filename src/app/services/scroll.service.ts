import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {

constructor() { }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
