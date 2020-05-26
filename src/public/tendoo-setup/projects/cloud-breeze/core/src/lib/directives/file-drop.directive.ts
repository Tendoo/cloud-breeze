import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[libFileDrop]'
})
export class FileDropDirective {

  @Output( 'onHover' ) onHover = new EventEmitter();
  @Output( 'onDrop' ) onDrop = new EventEmitter();
  @Output( 'onLeaving' ) onLeave = new EventEmitter();

  constructor() { }

  @HostListener( 'dragover', [ '$event' ]) public handleHover( event ) {
    event.preventDefault();
    event.stopPropagation();
    this.onHover.emit( true );
  }

  @HostListener( 'drop', [ '$event' ]) public handleDrop( event ) {
    event.preventDefault();
    event.stopPropagation();
    if ( event.dataTransfer.files.length > 0 ) {
      this.onDrop.emit( event.dataTransfer.files );
    }
  }

  @HostListener( 'dragleave', [ '$event' ] ) public handleLeave( event ) {
    event.preventDefault();
    event.stopPropagation();
    this.onLeave.emit( true );
  }

}
