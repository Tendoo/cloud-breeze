import { Component, OnInit, Inject } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadStatusComponent } from '../../load-status/load-status.component';
import { Form, Field } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-load-delivery',
  templateUrl: './load-delivery.component.html',
  styleUrls: ['./load-delivery.component.scss']
})
export class LoadDeliveryComponent implements OnInit {
  form: Form;
  fieldSources   = {};
  constructor(
    private tendoo: TendooService,
    @Inject( MAT_DIALOG_DATA ) private load: any,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<LoadStatusComponent>
  ) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.tendoo.forms.getPublicForm( 'brookr.drivers-loads-delivery' ).subscribe( ( form: Form ) => {
        this.form   = ValidationGenerator.buildForm( form );
      })
    }, 0 );
  }

  cancel() {
    this.dialogRef.close();
  }

  onFileChange( event, field: Field ) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fieldSources[ field.name ]   = file;
    }
  }

  submitDocument() {
    const formData  = new FormData;
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }

    this.form.sections.forEach( s => {
      s.fields.forEach( field => {
        if ( field.type === 'file' ) {
          formData.append( field.name, this.fieldSources[ field.name ] );
        } else {
          formData.append( field.name, field.control.value );
        }
      })
    })

    this.tendoo.post( `${this.tendoo.baseUrl}brookr/loads/stop/${this.load.id}`, formData ).subscribe( result => {
      this.dialogRef.close();
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message || result[ 'message' ], 'OK', { duration: 3000 });
    });
  }

}