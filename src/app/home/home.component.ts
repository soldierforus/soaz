import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { ProcessComponent } from "../process/process.component";
import { PricingComponent } from "../pricing/pricing.component";
import { AboutComponent } from "../about/about.component";
import { HeroComponent } from "../hero/hero.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ContactComponent, FooterComponent, ProcessComponent, PricingComponent, AboutComponent, HeroComponent, NavComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
