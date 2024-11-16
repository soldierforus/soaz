import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
})
export class NavComponent implements OnInit {

  constructor(private scroll: ScrollService) { }

  ngOnInit() {
  }
  
  scrollTo(element: string) {
    this.scroll.scrollTo(element);
  }
}
