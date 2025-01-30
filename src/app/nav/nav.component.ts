import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import {  NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class NavComponent implements OnInit {

  constructor(private scroll: ScrollService, private router: Router) { }
  currentPath!: string;
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath = this.router.url;
      });
  }
  
  scrollTo(element: string) {
    this.scroll.scrollTo(element);
  }
}
