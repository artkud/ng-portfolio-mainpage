import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: Array<any>;
  constructor(private http: Http) {
    this.navLinks = [{label: 'Home', href: '/'}, {
      label: 'Portfolio',
      href: '/'
    }, {label: 'About', href: '/'}, {label: 'Contact', href: '/'}];
  }
  
  ngOnInit() {
  }

}
