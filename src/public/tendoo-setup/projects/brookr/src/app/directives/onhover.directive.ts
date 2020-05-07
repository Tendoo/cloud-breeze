import { OnInit, Directive, ElementRef, Renderer2, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[debounce]',
})
export class Debounce implements OnInit {
  @Input( 'debounce' ) debounce: number;

  status: string  = 'out';

  timeout;

  @Output() trigger = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }  


  ngOnInit() {
    this.debounce = this.debounce || 1000;
  }

  @HostListener( 'mouseleave' )
  killCounting() {
    clearTimeout(this.timeout);
    if ( this.status === 'in' ) {
      this.timeout = setTimeout(() => {
        this.trigger.emit('left');
        this.status = 'out';
      }, this.debounce);
    }
  }

  @HostListener( 'mouseenter' )
  startCounting() {
    clearTimeout(this.timeout);
    if ( this.status === 'out' ) {
      this.timeout = setTimeout(() => {
        this.trigger.emit('hovered');
        this.status = 'in';
      }, this.debounce);
    }
  }
}
