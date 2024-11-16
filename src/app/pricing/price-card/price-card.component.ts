import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../models/package';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css'],
  standalone: true
})
export class PriceCardComponent implements OnInit {
  @Input() package!: Package;
  constructor(private scroll: ScrollService) { }

  ngOnInit() {
  }
  
  scrollTo(element: string) {
    this.scroll.scrollTo(element);
  }
}
