import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueHighlight]'
})
export class BlueHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
    /**
     * In alcune circostanze è possibile che la direttiva non abbia accesso al DOM, a quindi questo approccio è definito obsoleto
     */ 
    // this.elementRef.nativeElement.style.backgroundColor = 'blue'
    // this.elementRef.nativeElement.style.color = 'white'

    /**
     *  approccio più completo per modificare e accedere al DOM è usare i metodi forniti da Renderer2
     */
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
    
    this.renderer.setAttribute(this.elementRef.nativeElement, 'attributo-di-prova', 'prova superata!')
  }
}
