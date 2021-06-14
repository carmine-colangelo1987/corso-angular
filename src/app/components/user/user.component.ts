import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  template: `
  <div class="card">
    <ul class="list-group">
      <li *ngFor="let user of users" class="list-group-item">
        <h4>
          <small class="d-block mb-2">{{user.id}}</small>
          {{user.label}}
        </h4>
        <app-planet [userId]="user.id"></app-planet>
        <button class="btn btn-danger btn-sm"  (click)="deleteUser(user)">
          cancella
        </button>
      </li>
    </ul>
    <div class="card-footer">
      <button class="btn btn-primary btn-sm"  (click)="updateUserList()">
          Aggiorna la lista
      </button>
    </div>
  </div>
    
  `,
  providers: [UserService]
})
export class UserComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('planetRef') planetRef: ElementRef

  users: User[] = []

  private _sub: Subscription

  constructor(private _users$: UserService) { 
    this.updateUserList()
  }

  ngOnInit() {
    this._sub = interval(1000).subscribe(count => console.log(count))
  }

  ngAfterViewInit() {
    console.log('UserComponent planetRef', this.planetRef)
    // questo planetRef è definito nel template del componente planet, e questo componente (che è padre) non può accedervi!
  }

  ngOnDestroy() {
    this._sub.unsubscribe()
  }

  updateUserList() {
    this.users = this._users$.getAllUsers()
    console.log(this.users)
  }

  deleteUser(user: User) {
    this._users$.deleteUser(user)
    this.updateUserList() 
  }


}
