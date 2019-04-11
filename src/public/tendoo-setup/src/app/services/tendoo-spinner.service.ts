import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingAnimationComponent } from '../partials/loading-animation/loading-animation.component';

@Injectable({
    providedIn: 'root'
})
export class TendooSpinnerService {
    subsription: MatDialogRef<LoadingAnimationComponent>;
    constructor(
        private dialog: MatDialog
    ) { }

    open( text: string = 'Loading...', ref = 'dialog' ) {
        this.subsription    =   this.dialog.getDialogById( 'loading-animation' );
        
        if ( this.subsription ) {
            return this.subsription.componentInstance.setText( text );
        } 

        this.dialog.open(
            LoadingAnimationComponent, {
                id: 'loading-animation',
                hasBackdrop: false,
                data: { text, ref },
                position: {
                    bottom: '20px',
                    right: '20px'
                }
            }
        )
    }

    /**
     * Close a dialog using the reference provided. A reference prevent from closing dialog 
     * updated by another part of the script (or component).
     * @param ref dialog unique reference
     * @return void
     */
    close( ref = 'dialog' ) {
        const dialog    =   this.dialog.getDialogById( 'loading-animation' );
        if ( dialog ) {
            dialog.componentInstance.closeWithRef( ref );
        } 
    }
}
