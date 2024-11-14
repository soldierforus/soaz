import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { PriceCardComponent } from "./pricing/price-card/price-card.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, HeroComponent, AboutComponent, PriceCardComponent, PricingComponent, ContactComponent,ProcessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soazsites';
}
