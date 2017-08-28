import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  spaceScreens: Array<any>;
  navLinks: Array<any>;

  constructor(private http: Http) {
    this.navLinks = [{label: 'Home', href: '/'}, {
      label: 'Portfolio',
      href: '/'
    }, {label: 'About', href: '/'}, {label: 'Contact', href: '/'}];

    this.http.get('./assets/data.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.spaceScreens = res);
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;

    }
    else {
      this.spaceScreens[i].liked = 0;
    }

  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}
