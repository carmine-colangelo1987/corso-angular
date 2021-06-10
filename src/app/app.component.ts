import { Component, OnInit } from '@angular/core';
import Status from './model/Status'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corso-angular';
  isActive = true
  list = [
    {name: 'primo elemento'},
    {name: 'secondo elemento'}
  ]
  status: Status = 'enabled'
  pHeight = 45
  textVisible = false
  prova: string
  isTimeToGoodbye: boolean = false

  ngOnInit() {
    setTimeout(() => {
      this.prova = 'Questa è una prova'
      this.textVisible = true
      console.log('\n\n\n')
    }, 3000)

    setTimeout(() => this.isTimeToGoodbye = true, 7000)
  }
}
