import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { SetupService } from 'src/app/services/setup.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
    fields: Field[]     =   [];
    applicationForm: FormGroup;
    constructor(
        public setup: SetupService,
        private snackbar: MatSnackBar,
        private router: Router,
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        this.fields     =   [
            {
                name: 'application_name',
                value: 'Tendoo CMS',
                type: 'text',
                validation: 'required',
                description: 'What will be the name of your new installation ?',
                label: 'Application Name'
            }, {
                name: 'username',
                value: 'admin',
                type: 'text',
                validation: 'required|min:5',
                description: 'What is the main account username ?',
                label: 'Username'
            },  {
                name: 'password',
                value: '',
                type: 'password',
                validation: 'required|min:6',
                description: 'Provide a unique and unpredictable password for the main user.',
                label: 'Password'
            }, {
                name: 'password_confirm',
                value: '',
                type: 'password',
                validation: 'required|matches:password',
                description: 'Must be the same as password.',
                label: 'Confirm'
            }, {
                name: 'email',
                value: '',
                type: 'email',
                validation: 'required|email',
                description: 'What is the email used for the main user ?',
                label: 'Email'
            }
        ];

        const fields    =   ValidationGenerator.buildFormControls( this.fields );
        this.applicationForm    =   new FormGroup( fields );
    }

    setupApplication() {
        ValidationGenerator.touchAllFields( this.applicationForm );

        if ( ! this.applicationForm.valid ) {
            return this.snackbar.open( 'Unable to proceed, the form has one or more errors.', null, {
                duration: 3000
            });
        }

        this.setup.application( this.applicationForm.value ).subscribe( ( result: AsyncResponse ) => {
            this.snackbar.open( result.message );
            this.router.navigateByUrl( '/auth/login' );
        }, ( result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message );
            this.fields.forEach( field => {
                let formCtrl;
                if ( result.error.errors[ field.name ] !== undefined ){
                    field.control.setErrors({ error : true });
                    field.errors    =   result.error.errors[ field.name ];
                }
            })
        });
    }
    
}
