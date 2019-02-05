import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/interfaces/field';
import { TendooService } from 'src/app/services/tendoo.service';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { MatSnackBar } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    fields: Field[]         =   [];
    registerForm: FormGroup;

    constructor(
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        public router: Router,
    ) { 
        this.tendoo.setTitle( 'Create a new account' );
    }
    
    ngOnInit() {
        this.tendoo.fields.getPublicFields( 'auth.register' ).subscribe( (fields: Field[]) => {
            this.fields         =   fields;
            const controls      =   ValidationGenerator.buildFormControls( this.fields );
            this.registerForm   =   new FormGroup( controls );
        });
    }

    register() {
        ValidationGenerator.touchAllFields( this.registerForm );

        if ( ! this.registerForm.valid ) {
            return this.snackbar.open( 'Unable to proceed, the form is not valid.', 'OK', { duration: 5000 });
        }

        ValidationGenerator.deactivateFields( this.fields );

        this.tendoo.auth.register( this.registerForm.value ).subscribe( (result: AsyncResponse ) => {
            
            /**
             * when the registration is successful
             * let's redirect back to the login page.
             */
            this.router.navigateByUrl( 'auth/login?notice=from-registration' );
            this.snackbar.open( result.message, 'OK', { duration: 5000 });

        }, (result: HttpErrorResponse ) => {

            this.snackbar.open( result.error.message, 'OK', { duration: 5000 });
            ValidationGenerator.enableFields( this.fields );

            /**
             * loop all the field to show the 
             * error on the component.
             */
            for( let error in result.error.errors ) {
                this.registerForm.get( error ).setErrors({ error: true });
                this.fields.forEach( field => {
                    if ( field.name === error ) {
                        field.errors    =   result.error.errors[ field.name ];
                    }
                });
            }
        })
    }
    
}
