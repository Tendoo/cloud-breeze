import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SetupService } from 'src/app/services/setup.service';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { Router } from '@angular/router';

@Component({
    selector: 'app-database',
    templateUrl: './database.component.html',
    styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
    
    fields: Field[]     =   [];
    setupForm: FormGroup;

    constructor(
        private snackbar: MatSnackBar,
        public setup: SetupService,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.fields     =   [
            {
                appearance: 'fill',
                name: 'hostname',
                label: 'Host',
                description: 'provide a url to the host',
                type: 'text',
                validation: 'required',
                value: 'localhost',
            }, {
                appearance: 'fill',
                name: 'username',
                label: 'Username',
                description: 'provide a username for the host',
                type: 'text',
                validation: 'required',
                value: 'root',
            }, {
                appearance: 'fill',
                name: 'password',
                label: 'Password',
                description: 'provide a password for the host',
                type: 'password',
            }, {
                appearance: 'fill',
                name: 'db_name',
                label: 'Database',
                description: 'provide the database name',
                type: 'text',
                validation: 'required',
                value: 'laravel-ng'
            }, {
                appearance: 'fill',
                name: 'db_prefix',
                label: 'Tables Prefix',
                description: 'provide a unique table prefix',
                type: 'text',
                value: 'tendoo_'
            }
        ];

        const fields    =   ValidationGenerator.buildFormControls( this.fields );
        this.setupForm  =   new FormGroup( fields );
    }    

    /**
     * Setup database
     * @return void
     */
    setupDatabase() {
        ValidationGenerator.touchAllFields( this.setupForm );

        if ( ! this.setupForm.valid ) {
            return this.snackbar.open( 'Unable to proceed, the database form is invalid !', null, {
                duration: 3000
            });
        }

        this.__submitForm();
    }

    /**
     * Submit Form
     * @return void
     */
    private __submitForm() {

        this.setup.setupDatabase( this.setupForm.value ).subscribe( (result: AsyncResponse ) => {
            this.snackbar.open( result.message )
            this.router.navigateByUrl( '/do-setup/application' );
        }, (response: HttpErrorResponse ) => {
            this.snackbar.open( response.error.message, null, {
                duration: 3000
            });
        });
    }
}
