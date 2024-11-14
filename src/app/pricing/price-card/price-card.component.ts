import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../models/package';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css'],
  standalone: true
})
export class PriceCardComponent implements OnInit {
  @Input() package!: Package;
  constructor() { }

  ngOnInit() {
  }

}
