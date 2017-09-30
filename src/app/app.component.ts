import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: Array<any>;
  constructor(private http: Http) {
    this.navLinks = [{label: 'Home', href: '/'}, {
      label: 'Portfolio',
      href: '/'
    }, {label: 'About', href: '/'}, {label: 'Contact', href: '/'}];
  }
}
