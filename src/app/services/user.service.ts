import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { GenUserService } from './gen-user.service';

@Injectable()
export class UserService {

  users: User[] = []
  
  constructor(private _genUser$: GenUserService) {
    this.users = [
      this._genUser$.gen('Goku', 'Terra'),
      this._genUser$.gen('Vegeta', 'Vegeta'),
      this._genUser$.gen('Gohan', 'Terra'),
      this._genUser$.gen('Piccolo', 'Namec'),
      this._genUser$.gen('Tehnsinahn', 'Terra')
    ]
  }

  getAllUsers(): User[] {
    return this.users
  }

  deleteUser (userToDelete: User): void {
    this.users = this.users.filter(user => user.id !== userToDelete.id);
  }

  getUserPlanet(id: number): string {
    const user = this.users.find(user => user.id === id);
    if (!user) return null
    
    return user.planet
  }
}
