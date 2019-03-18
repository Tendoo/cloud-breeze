import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';

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
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
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
                
                /**
                 * try to catch error throwed during
                 * the migration
                 */
                let promise;
                try {
                    promise                 =   await <AsyncResponse>currentPromise.exec();
                } catch( e ) {
                    if ( e instanceof HttpErrorResponse ) {
                        const snackBarObservable    =   this.snackbar.open( e.error.message, 'TRY AGAIN' )
                            .afterDismissed()
                            .subscribe( result => {
                                this.ngOnInit();
                                snackBarObservable.unsubscribe();
                            })
                    }
                }
                
                this.currentlyProcessing    =   promise.message;
            }
        }

        resolveAsync().then( result => {
            this.dialog.getDialogById( 'core-migration-dialog' ).close();
        });
    }
    
}
