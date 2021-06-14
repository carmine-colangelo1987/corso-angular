import { Component, Input, OnInit,AfterViewInit,ViewChild
  ,ElementRef } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-planet',
  template: `
    <p #planetRef>{{planet}}</p>
  `,
})
export class PlanetComponent implements OnInit, AfterViewInit {
  @ViewChild('planetRef') planetRef: ElementRef

  ngAfterViewInit() {
    console.log('PlanetComponent planet', this.planetRef)
  }

  planet: string
  @Input() userId: User['id']

  constructor(private users$: UserService) {

  }

  ngOnInit(): void {
    this.planet = this.users$.getUserPlanet(this.userId)
  }

}
