import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroItem } from '../model/HeroItem';
import HeroDetail from '../model/HeroDetail.model';
import mockList from '../mock/hero-list';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _list: HeroItem[] = mockList

  constructor(private http: HttpClient, private _decimalPipe: DecimalPipe) { }

  getHeroesList(): HeroItem[] {
    return this._list
  }

  getDetail(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getImage(id: number): string {
    const num = this._decimalPipe.transform(id, '3.0-0')
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
  }

}
