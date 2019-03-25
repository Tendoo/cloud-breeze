import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';
import { TendooService } from 'src/app/services/tendoo.service';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { HelperService } from 'src/app/services/helper.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    fields: Field[]     =   [];
    loginForm: FormGroup;
    notice: string;
    isLoading           =   true;

    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        private router: Router,
        public routeSnapshot: ActivatedRoute,
        private cookie: CookieService,
        private helper: HelperService,
    ) { 
        this.tendoo.setTitle( 'Login' );
    }
    
    ngOnInit() {
        this.isLoading  =   true;
        this.routeSnapshot.queryParamMap.subscribe( query => {
            this.notice   =   query.get( 'notice' );
        });

        this.tendoo.fields.getPublicFields( 'auth.login' ).subscribe( ( rawFields: Field[] ) => {
            this.isLoading  =   false;
            this.fields     =   rawFields;
            const fields    =   ValidationGenerator.buildFormControls( this.fields );
            this.loginForm  =   new FormGroup( fields );
        }, ( result ) => {
            this.isLoading  =   false;
            this.snackbar.open( 'Unable to load the login form.', 'TRY AGAIN' )
                .afterDismissed()
                .subscribe( action => {
                    if ( action.dismissedByAction ) {
                        this.ngOnInit();
                    }
                })
        })
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

            /**
             * keep the user signed only if he 
             * has explicitely requested that.
             */
            if ( this.loginForm.get( 'keep_me_in' ).value ) {
                const now   =   moment.now();
                this.cookie.set( 'auth.user', result.token, moment( now ).add( 7, 'days' ).toDate(), '/' );
            }

            this.snackbar.open( result.message, null, {
                duration: 3000
            });

            /**
             * if the intented has been defined. 
             * let's redirect the user to that location
             */
            let path    =   this.tendoo.auth.intented;

            this.routeSnapshot.queryParamMap.subscribe( param => {                
                if ( param.get( 'redirect' ) !== null ) {
                    window.location.href     =   param.get( 'redirect' );
                } else {
                    console.log( this.helper.isUrl( path ), path );
                    if ( this.helper.isUrl( path ) ) {
                        window.location.href     =   path;
                    } else {
                        this.router.navigateByUrl( path || 'dashboard' );
                    }
                }
            })
        }, (result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message, 'OK', { duration: 3000 });
        })
    }
    
}
