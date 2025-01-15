import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  standalone: true
})
export class ProcessComponent implements OnInit {
  payments: string[] = [ 'bitcoin','cash','paypal','mastercard','venmo', 'visa','zelle' ]

  constructor() { }

  ngOnInit() {
  }

}
