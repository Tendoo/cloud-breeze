import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MediaUploadStatus } from 'src/app/interfaces/media-upload-status';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    currentProgress: number     =   0;
    processedFiles: number      =   0;
    totalFiles: number          =   0;
    processing: File;
    constructor(
        
    ) { }
    
    ngOnInit() {
    }

    setProcessing({ files, index }) {
    }

    computeProcessedFiles( files ) {
    }
    
}
