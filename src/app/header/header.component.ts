import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks: Array<any>;

  constructor() {
    this.navLinks = [{label: 'Home', href: '/'}, {label: 'Portfolio',  href: '/'}, {label: 'About', href: '/'}, {label: 'Contact', href: '/'}];

  }

}
