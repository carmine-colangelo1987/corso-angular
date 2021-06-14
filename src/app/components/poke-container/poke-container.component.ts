import { Component, OnInit } from '@angular/core';
import { PokemonList, PokemonListItem } from 'src/app/model/PokemonListItem.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-poke-container',
  template: `
    <app-poke-card *ngFor="let pokemon of list" [pokemonName]="pokemon.name" [pokemonId]="pokemon.url | slice:34"></app-poke-card>
  `,
  styles: [
  ]
})
export class PokeContainerComponent implements OnInit {

  list: PokemonListItem[]

  constructor(private _pokemons$: PokemonsService) { 
    
  }

  ngOnInit(): void {
    this._pokemons$.getPokemonList().subscribe((list: PokemonList) => {
      this.list = list.results
    })
  }

}
