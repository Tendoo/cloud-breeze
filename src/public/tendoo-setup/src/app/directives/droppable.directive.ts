import { Directive, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
    @Output() dropped: EventEmitter<any> = new EventEmitter();
    @Output( 'dragOver' ) dragOver: EventEmitter<any>   =   new EventEmitter();
    @Output( 'dragOut' ) dragOut: EventEmitter<any>     =   new EventEmitter();
    element: HTMLElement;
    constructor( private _elementRef: ElementRef ) { }
    
    ngOnInit() {
        this.element   =   <HTMLElement>this._elementRef.nativeElement
        this.element.addEventListener( 'dragenter', ( e ) => {
            this.handleDragEnter( e );            
        } );
        this.element.addEventListener( 'dragexit', ( e ) => {
            this.handleDragOut( e );
        })
        this.element.addEventListener( 'dragleave', ( e ) => {
            this.handleDragOut( e );
        })
    }

    handleDragEnter( e ) {
        this.dragOver.emit( e );
    }
    handleDragOut( e ) {
        this.dragOut.emit( e );
    }
}
