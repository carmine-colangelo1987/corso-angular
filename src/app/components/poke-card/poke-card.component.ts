import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="getImage()" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{pokemonName}}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
})
export class PokeCardComponent implements OnInit {

  @Input() pokemonName
  @Input() pokemonId

  constructor(private _decimal: DecimalPipe) { 
    
  }

  getImage(): string {
    const numId = +(this.pokemonId.replace('/', ''))
    const stringId = this._decimal.transform(numId, '3.0-0')
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${stringId}.png`
  }

  ngOnInit(): void {
  }

}
