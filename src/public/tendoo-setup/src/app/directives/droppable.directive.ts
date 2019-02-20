import { Directive, EventEmitter, Output, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
    @Output() dropped: EventEmitter<any> = new EventEmitter();
    @Output( 'dragOver' ) dragOver: EventEmitter<any>   =   new EventEmitter();
    @Output( 'dragOut' ) dragOut: EventEmitter<any>     =   new EventEmitter();
    @Output( 'dropOver' ) drop: EventEmitter<any>           =   new EventEmitter();
    element: HTMLElement;
    constructor( private _elementRef: ElementRef ) { }
    
    ngOnInit() {
    }

    @HostListener( 'dragover', [ '$event' ])
    handleDragEnter( e: DragEvent | Event ) {
        e.preventDefault();
        e.stopPropagation();
        this.dragOver.emit( e );
    }

    @HostListener( 'dragleave', [ '$event' ])
    handleDragOut( e: DragEvent | Event ) {
        e.preventDefault();
        e.stopPropagation();
        this.dragOut.emit( e );
    } 

    @HostListener( 'drop', [ '$event' ])
    handleDrop( event: MouseEvent ) {
        event.preventDefault();
        event.stopPropagation();
        this.drop.emit( event );
    }
}
