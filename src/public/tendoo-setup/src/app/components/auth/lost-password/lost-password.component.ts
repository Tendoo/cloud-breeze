import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lost-password',
    templateUrl: './lost-password.component.html',
    styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
    lostPasswordForm: FormGroup;
    fields: Field[];
    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.tendoo.fields.getPublicFields( 'auth.recovery' ).subscribe( (fields: Field[]) => {
            this.fields             =   fields;
            const controllers       =   ValidationGenerator.buildFormControls( this.fields );
            this.lostPasswordForm   =   new FormGroup( controllers );
        })

    }
    
    proceed() {
        ValidationGenerator.touchAllFields( this.lostPasswordForm );

        if ( this.lostPasswordForm.invalid ) {
            return this.snackbar.open( 'Unable to proceed, the email provided is not valid', 'OK', { duration: 300 });
        }

        ValidationGenerator.deactivateFields( this.fields );

        const subscription  =   this.tendoo
            .auth
            .requestPasswordReset( this.lostPasswordForm.value )
            .subscribe( ( response: AsyncResponse ) => {
                this.snackbar.open( response.message, 'OK', { duration : 3000 });
                subscription.unsubscribe();
                this.router.navigateByUrl( '/auth/login?notice=email-send' );
        }, ( result:HttpErrorResponse ) => {
            this.snackbar.open( result.error.message || 'An unexpected error occured.', 'OK' );
            subscription.unsubscribe();
            ValidationGenerator.enableFields( this.fields );
        })
    }
}
