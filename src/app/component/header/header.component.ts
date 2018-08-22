/**
 * Importing angular dependencies here
 */
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // variables binded to html
  username = '';
  constructor() { }

  ngOnInit() {
  }
}
