import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <app-card>
      <h5 header>Articolo</h5>
      <ng-content></ng-content>
      <p #testoArticoloView>
          Questo è della view
      </p>
      <app-btn footer>
        Clicca su questo bottone!
      </app-btn>
      <app-btn footer>
        Clicca proprio su questo bottone!
      </app-btn>
    </app-card>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  @Input() prova: string;
  @ViewChild('testoArticoloView', { static: false }) testoArticoloView: ElementRef
  @ContentChild('testoArticoloContent', { static: false }) testoArticoloContent: ElementRef

  ngOnChanges(changes: SimpleChanges) {
    console.group('ngOnChanges')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.log('prova', this.prova)
    console.groupEnd()
  }

  ngOnInit(): void {
    console.group('ngOnInit')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngDoCheck(): void {
    console.group('ngDoCheck')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngAfterContentInit() {
    console.group('ngAfterContentInit')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngAfterContentChecked() {
    console.group('ngAfterContentChecked')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngAfterViewInit() {
    console.group('ngAfterViewInit')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngAfterViewChecked() {
    console.group('ngAfterViewChecked')
    console.log('testoArticoloContent', this.testoArticoloContent)
    console.log('testoArticoloView', this.testoArticoloView)
    console.groupEnd()
  }

  ngOnDestroy() {
    console.group('ngOnDestroy')
    console.log('its time to go!!')
    console.groupEnd()
  }
}
