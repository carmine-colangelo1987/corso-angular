import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenUserService {

  gen(label: string, planet: string) {
    return { 
      id: Math.round(Math.random() * 100000),
      label,
      planet
     }
  }
}
