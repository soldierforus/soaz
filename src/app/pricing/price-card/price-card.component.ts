import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../models/package';
import { ScrollService } from '../../services/scroll.service';
import { SaleService } from '../../services/sale.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css'],
  standalone: true
})
export class PriceCardComponent implements OnInit {
  @Input() package!: Package;
  saleEnds!: any;
  constructor(private scroll: ScrollService, private saleService: SaleService) { }

  ngOnInit() {
    this.saleEnds = this.saleService.timeRemaining(new Date ('2025-04-01T23:59:59'))
  }
  
  scrollTo(element: string) {
    this.scroll.scrollTo(element);
  }
}
