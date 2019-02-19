import { Directive, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
    @Output() dropped: EventEmitter<any> = new EventEmitter();
    @Output( 'dragOver' ) dragOver: EventEmitter<any>   =   new EventEmitter();
    @Output( 'dragOut' ) dragOut: EventEmitter<any>     =   new EventEmitter();
    @Output( 'drop' ) drop: EventEmitter<any>           =   new EventEmitter();
    element: HTMLElement;
    constructor( private _elementRef: ElementRef ) { }
    
    ngOnInit() {
        this.element   =   <HTMLElement>this._elementRef.nativeElement
        this.element.addEventListener( 'dragenter', ( e ) => {
            e.preventDefault();
            this.handleDragEnter( e );  
        } );
        this.element.addEventListener( 'dragexit', ( e ) => {
            e.preventDefault();
            this.handleDragOut( e );
        });
        this.element.addEventListener( 'drop', ( e ) => {
            e.preventDefault();
            this.handleDrop( e );
            alert( 'has dropped' );
        })
        this.element.addEventListener( 'dragleave', ( e ) => {
            e.preventDefault();
            this.handleDragOut( e );
        })
    }

    handleDragEnter( e: DragEvent | Event ) {
        this.dragOver.emit( e );
    }
    handleDragOut( e: DragEvent | Event ) {
        this.dragOut.emit( e );
    }
    handleDrop( e: DragEvent | Event ) {
        this.drop.emit( e );
    }
}
