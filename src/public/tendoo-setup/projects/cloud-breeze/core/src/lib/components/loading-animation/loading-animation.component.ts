import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'cb-spinner',
    templateUrl: './loading-animation.component.html',
    styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {
    ref: string;
    constructor(
        @Inject( MAT_DIALOG_DATA ) public data,
        public dialogRef: MatDialogRef<LoadingAnimationComponent>
    ) { 
        this.ref    =   this.data.ref || 'dialog';
    }
    
    ngOnInit() {
    }
    
    /**
     * define a new text for the animation
     * spinner
     * @param string text
     * @param string reference
     * @return void
     */
    setText( text, ref = 'dialog' ) {
        this.data.text  =   text;
        this.ref        =   ref;
    }

    /**
     * close dialog with the following 
     * reference
     * @param string ref
     * @return void
     */
    closeWithRef( ref ) {
        if ( this.ref === ref ) {
            this.dialogRef.close();
        }
    }
}
