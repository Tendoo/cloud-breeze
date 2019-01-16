import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-medias-upload',
    templateUrl: './medias-upload.component.html',
    styleUrls: ['./medias-upload.component.css']
})
export class MediasUploadComponent implements OnInit {
    dragMessage;
    dragState: string;
    constructor() { }
    
    ngOnInit() {
        this.setDragState();

        document.addEventListener( 'drag', ( e ) => {
            e.preventDefault();
            e.stopPropagation();
            this.setDragState( 'over' );
        });
        
        // document.getElementById( 'drag-zone' ).addEventListener( 'dragover', ( e ) => {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     this.setDragState( 'over' );
        // });

        // document.getElementById( 'drag-zone' ).addEventListener( 'dragleave', ( e ) => {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     this.setDragState( 'default' );
        // });
    }
    

    setDragState( state?: string ) {
        switch( state ) {
            case 'over':
                this.dragMessage    =   'Drop the file to upload it...';
            break;
            default:
                this.dragMessage    =   'Click here if you want to select a file';
            break;
        }

        this.dragState      =   state;
    }

    preventDefault( e ) {
        e.preventDefault();
        e.stopPropagation();
        this.setDragState( 'over' );
    }

    handleDrop( event ) {
        event.preventDefault();
    }
}
