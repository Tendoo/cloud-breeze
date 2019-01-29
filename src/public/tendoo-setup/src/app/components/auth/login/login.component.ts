import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';
import { TendooService } from 'src/app/services/tendoo.service';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    fields: Field[]     =   [];
    loginForm: FormGroup;

    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.fields     =   [
            {
                label: 'Username',
                name: 'username',
                type: 'text',
                value: 'admin',
                description: 'Username saved during the registration.',
            }, {
                label: 'Password',
                name: 'password',
                type: 'password',
                value: 'sanches',
                description: 'Only you knows what is the password',
            }
        ];

        const fields    =   ValidationGenerator.buildFormControls( this.fields );
        this.loginForm  =   new FormGroup( fields );
        this.login();
    }

    login() {
        ValidationGenerator.touchAllFields( this.loginForm );

        if ( ! this.loginForm.valid ) {
            return this.snackbar.open( 'Unable to login, the login form as some erors', 'OK', {
                duration: 3000
            });
        }

        this.tendoo.auth.login( this.loginForm.value ).subscribe( (result:any) => {
            /**
             * once the user is connected
             * let's save the credential on 
             * each outgoing request
             */
            this.tendoo.auth.setCredentials( result.user, result.token );
            this.snackbar.open( result.message, null, {
                duration: 3000
            });

            /**
             * if the intented has been defined. 
             * let's redirect the user to that location
             */
            let path    =   this.tendoo.auth.intented;
            if ( path  !== undefined ) {
                return this.router.navigateByUrl( path );
            }

            this.router.navigateByUrl( 'dashboard/users' );

        }, (result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message );
        })
    }
    
}
