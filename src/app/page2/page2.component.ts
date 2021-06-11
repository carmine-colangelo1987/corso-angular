import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(
    private router: Router,
    private route: ActivatedRoute ) {}

  onNavToPage2 () {
    this.router.navigate(['page2'], {relativeTo: this.route})
  }
}
