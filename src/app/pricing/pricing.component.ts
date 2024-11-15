import { Component, OnInit } from '@angular/core';
import { PriceCardComponent } from './price-card/price-card.component';
import { Package } from '../models/package';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  standalone: true,
  imports: [PriceCardComponent]
})
export class PricingComponent implements OnInit {
  prices: Array<Package> = [
    {
      name: 'Basic',
      price: 500,
      description: 'The Basic package is perfect for a splash page, to announcing an event, a personal website, a portfolio, or to showcase the next big thing!  This package also has the fastest turnaround time from start to finish.',
      bullets: [
        'Landing page',
        'Choose from over 40 designs',
        'Free hosting',
        '5 free updates'
      ]
    },
    {
      name: 'Standard',
      price: 1000,
      description: 'The Standard package is our most popular package.  It includes a contact form and email set up with the websites domain name.  This package is ideal if you\'re looking to stand out as a professional business.',
      bullets: [
        'Choose from over 120 designs',
        'Free hosting',
        '10 free updates',
        'Contact form',
        'Custom domain email',
      ]
    },
    {
      name: 'Advanced',
      price: 2000,
      description: 'The Advanced package includes everything the other packages have and it\'s fine tuned for performance, accessibility, and Search Engine Optimization.',
      bullets: [
        'Choose from over 120 designs',
        'Free hosting',
        '20 free updates',
        'Contact form',
        'Custom domain email',
        'Custom Components',
        'Search Engine Optimization',
      ]
    },
    {
      name: 'Custom Additions',
      description: 'Need a more dynamic website or a specific custom design?  Any of the items below can be incorporated into a custom solution or added piece meal to any of the packages above',
      bullets: [
        'Multi-page website',
        'Custom design',
        '20 free updates',
        'Contact form',
        'Custom domain email',
        'Custom Components',
        'SEO',
        'Analytics',
        'CMS',
        'CRM',
        'Dynamic data solutions'
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
