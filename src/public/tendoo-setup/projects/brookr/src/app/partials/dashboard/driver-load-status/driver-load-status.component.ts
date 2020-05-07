import { Component, OnInit, Inject } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { Form } from '@cloud-breeze/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-driver-load-status',
  templateUrl: './driver-load-status.component.html',
  styleUrls: ['./driver-load-status.component.scss']
})
export class DriverLoadStatus implements OnInit {
  form: Form
  load: any;
  constructor(
    private tendoo: TendooService,
    @Inject( MAT_DIALOG_DATA ) private data: any,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<DriverLoadStatus>,
  ) { 
    this.load   = this.data.load;
  }

  ngOnInit(): void {
    setTimeout( () => {
      this.tendoo.forms.getPublicForm( 'broork.drivers-loads-status', this.load.id ).subscribe( ( form: Form ) => {
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
    
    const postForm  = this.form.formGroup.value;
    postForm.load[ 'driver_id' ]  = this.tendoo.auth.getUser().id;

    this.tendoo.put( `${this.tendoo.baseUrl}brookr/loads/self-assign/${this.load.id}`, postForm ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      this.dialogRef.close();
      this.ngOnInit();
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message, 'OK', { duration: 6000 });
      this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
