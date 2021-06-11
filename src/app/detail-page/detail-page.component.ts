import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  template: `
    <p>
      Pagina dettaglio della signora o del signor: <br>
      <b>{{name}}</b> <i *ngIf="mainPower">{{' | '}}{{mainPower}}</i> <i> | {{!fromEarth ? 'non' : null}} è terrestre</i>
    </p>
  `,
  styles: [
  ]
})
export class DetailPageComponent implements OnInit {

  name: string
  fromEarth: boolean
  mainPower: string

  constructor(private route: ActivatedRoute) { 
    console.log(route.snapshot.params)
    console.log(route.snapshot.queryParams)
    console.log(route.snapshot.fragment)
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.name = param.name
    })
    this.route.fragment.subscribe(hash => {
      this.mainPower = hash
    })
    this.route.queryParams.subscribe(qParam => {
      this.fromEarth = !!qParam.fromEarth
    })
  }

}
