import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { TendooService } from 'src/app/services/tendoo.service';
import { LoaderService } from 'src/app/services/loader.service';



@Component({
    selector: 'app-medias-upload',
    templateUrl: './medias-upload.component.html',
    styleUrls: ['./medias-upload.component.css']
})
export class MediasUploadComponent implements OnInit {
    dragMessage;
    dragState: string;
    dropzoneConfig: DropzoneConfigInterface;

    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        this.dropzoneConfig     =   {
            url: this.tendoo.medias.baseUrl + `tendoo/medias`,
            maxFilesize: 50,
            headers: LoaderService.headers
        }

        this.setDragState();
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
