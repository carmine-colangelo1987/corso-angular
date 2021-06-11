import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';

  constructor(
    private router: Router) { }

  onNavToPage (heroName: string, power: string, fromEarth: boolean) {
    this.router.navigate(
      [`/detail/${heroName}`], {
        queryParams: { fromEarth },
        fragment: power 
      })
  }
}
