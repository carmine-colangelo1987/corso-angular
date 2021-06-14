import { Component, OnInit } from '@angular/core';
import { HeroItem } from './model/HeroItem';
import Status from './model/Status'
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corso-angular';
  isActive = false
  list = [
    {name: 'primo elemento'},
    {name: 'secondo elemento'}
  ]
  status: Status = 'enabled'
  pHeight = 45
  textVisible = false
  prova: string
  isTimeToGoodbye: boolean = false

  listaEroi: HeroItem[] = []
  image: string

  constructor (private heroes$: HeroesService) {
    this.listaEroi = this.heroes$.getHeroesList()
    console.log(this.listaEroi)
  }

  ngOnInit() {
    
    this.heroes$.getDetail(36).subscribe(
      pokemon => console.log(pokemon),
      err => console.error(err))
    this.image = this.heroes$.getImage(36)
    
    setTimeout(() => {
      this.prova = 'Questa è una prova'
      this.textVisible = true
      
      console.log('\n\n\n')
    }, 3000)

    setTimeout(() => this.isTimeToGoodbye = true, 7000)
  }

  toggle() {
    this.isActive = !this.isActive
  }
}
