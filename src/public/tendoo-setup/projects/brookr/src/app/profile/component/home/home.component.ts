import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Form } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: Form;

  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.tendoo.forms.getPublicForm( 'brookr.profile' ).subscribe( ( form: Form) => {
      this.form   = ValidationGenerator.buildForm( form );
    })
  }

  submitProfile() {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }

    this.tendoo.post( `${this.tendoo.baseUrl}brookr/profile/settings`, this.form.formGroup.value ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message || result.message, 'OK', { duration: 5000 });
    })
  }
}
