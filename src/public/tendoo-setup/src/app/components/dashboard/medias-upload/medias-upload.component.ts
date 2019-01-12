import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-medias-upload',
    templateUrl: './medias-upload.component.html',
    styleUrls: ['./medias-upload.component.css']
})
export class MediasUploadComponent implements OnInit {
    dragMessage;
    constructor() { }
    
    ngOnInit() {
        this.setDragState();
    }
    

    setDragState( state?: string ) {
        console.log( state );
        switch( state ) {
            case 'start':
                this.dragMessage    =   'Drop that file right here...';
            break;
            default:
                this.dragMessage    =   'Click here if you want to select a file';
            break;
        }
    }
}
