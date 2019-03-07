import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { FormUrl } from 'src/app/interfaces/form-url';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
    
    id: number;
    fields: Field[]     =   [];
    formConfig: FormUrl;   
    form: FormGroup;

    constructor(
        public tendoo: TendooService,
        private activeRoute: ActivatedRoute,
        private snackbar: MatSnackBar,
        private route: Router
    ) { 
        this.tendoo.dashboardTitle( 'Edit a user' );
    }
    
    ngOnInit() {
        this.id    =   +this.activeRoute.snapshot.paramMap.get( 'id' );
        forkJoin(
            this.tendoo.forms.getForm( 'dashboard.users.edit', this.id ),
        ).subscribe( forkResult => {
            this.fields         =   <Field[]>forkResult[0][ 'fields' ];
            this.formConfig     =   <FormUrl>forkResult[0][ 'url' ]
            const fields        =   ValidationGenerator.buildFormControls( this.fields );
            this.form           =   new FormGroup( fields );
        })
    }
    
    submit( shouldReturn: boolean = null ) {
        ValidationGenerator.touchAllFields( this.form );

        if ( ! this.form.valid ) {
            this.snackbar.open( 'The form has some errors, please check it and try again ! ', 'OK', {
                duration: 4000
            });
        }

        this.tendoo.users.edit( this.id, this.form.value ).subscribe( (result:AsyncResponse) => {
            this.snackbar.open( result.message, 'OK', {
                duration: 3000
            });

            /**
             * if the user has requested, let's take him back where he has been
             */
            if ( shouldReturn ) {
                this.route.navigateByUrl( '/dashboard/users' );
            }
        }, ( response: HttpErrorResponse ) => {
            this.snackbar.open( response.error.message );

            /**
             * make sure to hightlight 
             * the fields which has a problem
             */
            const errors     =   response.error.errors;
            for( let error in errors ) {
                this.form.get( error ).setErrors({ error: true });
                this.fields.forEach( field => {
                    if ( field.name === error ) {
                        field.errors    =   errors[ field.name ];
                    }
                })
            }
        });
    }
}
