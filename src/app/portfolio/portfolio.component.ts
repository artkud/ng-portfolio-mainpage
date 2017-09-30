import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioImages: Array<any>;

  constructor(private http: Http) {
    this.http.get('./assets/data.json')
        .map(response => response.json().portfolios)
        .subscribe(res => this.portfolioImages = res);
  }
  likeMe(i) {
    if (this.portfolioImages[i].liked === 0) {
      this.portfolioImages[i].liked = 1;

    }
    else {
      this.portfolioImages[i].liked = 0;
    }

  }

  deleteMe(i) {
    this.portfolioImages.splice(i, 1);
    console.log(i);
  }
}
