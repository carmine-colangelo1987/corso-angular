import { Component } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `
    <button class="btn btn-primary">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class BtnComponent {}
