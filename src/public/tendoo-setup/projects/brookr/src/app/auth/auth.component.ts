import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TendooService } from '@cloud-breeze/services';
import { ValidationGenerator } from "@cloud-breeze/utilities";
import { Field } from '@cloud-breeze/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  fields: Field[];
  form: FormGroup;
  loaded        = false;
  isLoggingIn   = false;
  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.tendoo.fields.getPublicFields( 'brookr.login' ).subscribe( ( fields: Field[] ) => {
      const result  = ValidationGenerator.buildFormGroup( fields );
      this.form     = result.formGroup;
      this.fields   = result.fields;
      this.loaded   = true;
      // debug
      this.form.get( 'username' ).setValue( 'paolino' );
      // this.form.get( 'username' ).setValue( 'admin' );
      this.form.get( 'password' ).setValue( 'sanches' );
      this.login();
    }, ( result ) => {
      this.snackbar.open( result[ 'error' ][ 'message' ] || result.message || 'An unexpected error has occured', 'TRY AGAIN' )
        .afterDismissed()
        .subscribe( action => {
          if ( action.dismissedByAction ) {
            this.ngOnInit();
          }
      })
    });
  }

  login() {
    ValidationGenerator.touchAllFields( this.form );

    if ( this.form.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }

    this.isLoggingIn  = true;
    ValidationGenerator.deactivateFields( this.fields );
    this.tendoo.auth.login( this.form.value ).subscribe( result => {
      this.activatedRoute.queryParamMap.subscribe( param => {
        this.tendoo.auth.setCredentials( result[ 'user' ], result[ 'token' ]);
        this.tendoo.get( `${this.tendoo.baseUrl}brookr/profile/avatar` ).subscribe( avatar => {
          console.log( result[ 'user' ].role.namespace );
          const path = param.get( 'redirect' ) || ( result[ 'user' ].role.namespace === 'brookr.drivers' ? '/dashboard/drivers/loads' : '/dashboard' );
          result[ 'user' ].avatar   = avatar[ 'link' ] || null;
          this.snackbar.open( result[ 'message' ], null, { duration: 3000 });
          this.router.navigateByUrl( path );
        })
      })
    }, ( result ) => {
      this.isLoggingIn  = false;
      ValidationGenerator.enableFields( this.fields );
      this.snackbar.open( result[ 'error' ][ 'message' ] || 'An unexpected error has occored', 'OK', { duration: 5000 });
    });
  }

}
