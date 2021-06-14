import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,AfterViewInit,ViewChild
  ,ElementRef } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-planet',
  template: `
    <p #planetRef>
      <img [src]="image" width="20" height="20">
      {{planet}}
    </p>
  `,
})
export class PlanetComponent implements OnInit, AfterViewInit {
  @ViewChild('planetRef') planetRef: ElementRef

  ngAfterViewInit() {
    console.log('PlanetComponent planet', this.planetRef)
  }

  planet: string
  image: string
  @Input() userId: User['id']

  constructor(private users$: UserService, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.planet = this.users$.getUserPlanet(this.userId)
    this.http.get(`https://picsum.photos/id/1000/info`).subscribe((img: any) => {
      this.image = img.download_url
    })
  }

}
