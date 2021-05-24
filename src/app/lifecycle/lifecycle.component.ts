import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() esclamazione = 'Sono Vivo!';

  counterOnChange = 0
  counterOnInit = 0
  counterDoCheck = 0
  counterAfterContentInit = 0
  counterAfterContentChecked = 0
  counterAfterViewInit = 0
  counterAfterViewChecked = 0
  counterOnDestroy = 0

  constructor() {
    this.log(1, 'constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.counterOnChange++
    this.log(this.counterOnChange, 'ngOnChanges => ' + Object.keys(changes).join(' '))
  }
  ngOnInit () {
    this.counterOnInit++
    this.log(this.counterOnInit, 'ngOnInit')
  }
  ngDoCheck () {
    this.counterDoCheck++
    this.log(this.counterDoCheck, 'ngDoCheck')
  }
  ngAfterContentInit () {
    this.counterAfterContentInit++
    this.log(this.counterAfterContentInit, 'ngAfterContentInit')
  }
  ngAfterContentChecked () {
    this.counterAfterContentChecked++
    this.log(this.counterAfterContentChecked, 'ngAfterContentChecked')
  }
  ngAfterViewInit() {
    this.counterAfterViewInit++
    this.log(this.counterAfterViewInit, 'ngAfterViewInit')
  }
  ngAfterViewChecked () {
    this.counterAfterViewChecked++
    this.log(this.counterAfterViewChecked, 'ngAfterViewChecked')
  }
  ngOnDestroy() {
    this.counterOnDestroy++
    this.log(this.counterOnDestroy, 'ngOnDestroy')
  }

  log(counter: number, step: string) {
    
    console.log(counter, step)
  }
}
