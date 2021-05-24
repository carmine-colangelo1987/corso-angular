import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentationInput = 'Ci sono!'
  presentationContent = 'Questo è un content child'
  isLifecycleVisible: boolean = false

  onLifecycleToggle () {
    this.isLifecycleVisible = !this.isLifecycleVisible
  }
}
