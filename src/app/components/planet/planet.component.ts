import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-planet',
  template: `
    <p>{{planet}}</p>
  `,
})
export class PlanetComponent implements OnInit {

  planet: string
  @Input() userId: User['id']

  constructor(private users$: UserService) {

  }

  ngOnInit(): void {
    this.planet = this.users$.getUserPlanet(this.userId)
  }

}
