import { Component, OnInit, Inject } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { Form } from '@cloud-breeze/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-load-status',
  templateUrl: './load-status.component.html',
  styleUrls: ['./load-status.component.scss']
})
export class LoadStatusComponent implements OnInit {
  form: Form
  orderId: any;
  constructor(
    private tendoo: TendooService,
    @Inject( MAT_DIALOG_DATA ) private menu: any,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<LoadStatusComponent>,
  ) { 
    this.orderId  = this.menu[ 'id' ];
  }

  ngOnInit(): void {
    setTimeout( () => {
      this.tendoo.forms.getPublicForm( 'broork.loads-status', this.orderId ).subscribe( ( form: Form ) => {
        this.form   = ValidationGenerator.buildForm( form );
      }, ( response: HttpErrorResponse ) => {
        this.snackbar.open( response.error[ 'message' ] || response.message, 'OK', { duration: 3000 });
      });
    }, 0 );
  }

  saveStatus() {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 6000 });
    }

    this.form.sections.forEach( s => ValidationGenerator.deactivateFields( s.fields ) );
    this.tendoo.put( `${this.tendoo.baseUrl}brookr/loads/update-status/${this.orderId}`, this.form.formGroup.value ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      this.dialogRef.close();
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message, 'OK', { duration: 6000 });
      this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
