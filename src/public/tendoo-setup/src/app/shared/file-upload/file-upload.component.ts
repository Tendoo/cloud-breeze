import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaUploadStatus } from 'src/app/interfaces/media-upload-status';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    currentProgress: number     =   0;
    processedFiles: number      =   0;
    failedFiles: number         =   0;
    totalFiles: number          =   0;
    processing: File;
    constructor(
        @Inject( MAT_DIALOG_DATA ) private data: { files: File[], index: number }
    ) { }
    
    ngOnInit() {
        this.totalFiles         =   this.data.files.length;
        this.processing         =   this.data.files[ this.data.index ];
    }

    setProcessing({ files, index }) {
        this.processing     =   files[ index ];
        this.computeProcessedFiles( files );
    }

    computeProcessedFiles( files ) {
        this.processedFiles     =   this.data.files.filter( file => {
            return file[ 'uploaded' ];
        }).length;

        this.currentProgress    =   Math.round( ( this.processedFiles * 100 ) / this.totalFiles );
    }
    
}
