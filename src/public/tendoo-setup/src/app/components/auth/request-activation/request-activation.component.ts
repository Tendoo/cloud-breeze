import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { Field } from 'src/app/interfaces/field';

@Component({
    selector: 'app-request-activation',
    templateUrl: './request-activation.component.html',
    styleUrls: ['./request-activation.component.css']
})
export class RequestActivationComponent implements OnInit {
    fields: Field[]     =   [];
    requestActivationForm: FormGroup;
    constructor(
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        public router: Router,
    ) { 
        this.tendoo.setTitle( 'Request Activation Link' );
    }
    
    ngOnInit() {
        this.tendoo.fields.getPublicFields( 'auth.request-activation' ).subscribe( ( fields: Field[] ) => {
            this.fields                 =   fields;
            const controls              =   ValidationGenerator.buildFormControls( this.fields );
            this.requestActivationForm  =   new FormGroup( controls );
        }, (result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message, 'OK' );
        });
    }
    
    request() {
        ValidationGenerator.touchAllFields( this.requestActivationForm );

        if ( ! this.requestActivationForm.valid ) {
            return this.snackbar.open( 'Unable to proceed the form is not valid.' );
        }

        this.tendoo.auth.requestActivationLink( this.requestActivationForm.value ).subscribe( result => {
            this.snackbar.open( result[ 'message' ] );
            this.router.navigateByUrl( '/auth/login?notice=activation-sent' );
        }, ( result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message, 'OK' );
        });
    }
}
