import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';

@Component({
    selector: 'app-core-migration-dialog',
    templateUrl: './core-migration-dialog.component.html',
    styleUrls: ['./core-migration-dialog.component.css']
})
export class CoreMigrationDialogComponent implements OnInit {
    queue: any[]    =   [];
    currentlyProcessing: string;
    constructor(
        @Inject( MAT_DIALOG_DATA ) private data,
        private dialog: MatDialog
    ) { 
        console.log( this.data );
        this.queue  =   this.data.queue;
    }
    
    ngOnInit() {
        this.currentlyProcessing        =   'System update...';  
        
        const resolveAsync              =   async () => {    
            for( let index in this.data.queue ) {
                const currentPromise        =   this.queue[ index ];
                this.currentlyProcessing    =   currentPromise.before;
                let promise                 =   await <AsyncResponse>currentPromise.exec();
                this.currentlyProcessing    =   promise.message;
            }
        }

        resolveAsync().then( result => {
            this.dialog.getDialogById( 'core-migration-dialog' ).close();
        });
    }
    
}
