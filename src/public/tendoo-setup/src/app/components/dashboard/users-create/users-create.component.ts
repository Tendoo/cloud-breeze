import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { forkJoin } from 'rxjs';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';
import { FormUrl } from 'src/app/interfaces/form-url';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
    
    fields: Field[]     =   [];
    form: FormGroup;
    formConfig: {[key: string]: any};

    constructor(
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        private router: Router
    ) {
        this.tendoo.dashboardTitle( 'Create a new user' );
    }
    
    ngOnInit() {
        forkJoin(
            this.tendoo.forms.getForm( 'dashboard.users.create' ),
        ).subscribe( forkResult => {
            this.fields         =   <Field[]>forkResult[0][ 'fields' ];
            this.formConfig     =   <FormUrl>forkResult[0][ 'url' ]
            const fields        =   ValidationGenerator.buildFormControls( this.fields );
            this.form           =   new FormGroup( fields );
        })
    }

    /**
     * Submit the current form
     * @return void
     */
    submit() {
        ValidationGenerator.touchAllFields( this.form );

        if ( ! this.form.valid ) {
            this.snackbar.open( 'The form has some error(s). Please check the form and try again.' );
        }

        ValidationGenerator.deactivateFields( this.fields );

        this.tendoo.users.create( this.form.value ).subscribe( (result:AsyncResponse ) => {
            /**
             * enable back fields since they might be edited
             */
            ValidationGenerator.enableFields( this.fields );

            this.snackbar.open( result.message, 'OK', {
                duration: 4000
            });
            this.router.navigateByUrl( 'dashboard/users' );

        }, ( result: HttpErrorResponse ) => {
            /**
             * enable back fields since they might be edited
             */
            ValidationGenerator.enableFields( this.fields );

            this.snackbar.open( result.error.message, 'OK', {
                duration: 4000
            });

            /**
             * make sure to hightlight 
             * the fields which has a problem
             */
            const errors     =   result.error.errors;
            for( let error in errors ) {
                this.form.get( error ).setErrors({ error: true });
                this.fields.forEach( field => {
                    if ( field.name === error ) {
                        field.errors    =   errors[ field.name ];
                    }
                })
            }
        })
    }
    
}
