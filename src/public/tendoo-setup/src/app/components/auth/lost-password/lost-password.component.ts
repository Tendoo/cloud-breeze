import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Field, ValidationGenerator } from '@cloud-breeze/core';

@Component({
    selector: 'app-lost-password',
    templateUrl: './lost-password.component.html',
    styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
    lostPasswordForm: FormGroup;
    fields: Field[];
    recaptcha: Field;
    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.tendoo.fields.getPublicFields( 'auth.recovery' ).subscribe( (fields: Field[]) => {
            this.fields             =   fields;
            const recaptcha         =   this.fields.filter( field => field.type === 'recaptcha' );
            if ( recaptcha.length > 0 ) {
                this.recaptcha  =   recaptcha[0];
                this.recaptcha.reset    =   new EventEmitter<boolean>();
            }
            const controllers       =   ValidationGenerator.buildFormControls( this.fields );
            this.lostPasswordForm   =   new FormGroup( controllers );
        })
    }
    
    proceed() {
        ValidationGenerator.touchAllFields( this.lostPasswordForm );

        if ( this.lostPasswordForm.invalid ) {
            return this.snackbar.open( 'Unable to proceed, the email provided is not valid', 'OK', { duration: 3000 });
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
            if ( this.recaptcha ) {
                this.recaptcha.reset.emit(true);
            }
            ValidationGenerator.enableFields( this.fields );
        })
    }
}
