import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';
import { CrudConfig } from 'src/app/interfaces/crud-config.interface';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Field } from 'src/app/interfaces/field';

@Component({
    selector: 'app-crud-create',
    templateUrl: './crud-create.component.html',
    styleUrls: ['./crud-create.component.css']
})
export class CrudCreateComponent implements OnInit {
    crudConfig: CrudConfig;
    crudForm: FormGroup;
    
    constructor(
        private route: ActivatedRoute,
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        public router: Router
    ) { }
    
    ngOnInit() {
        this.route.paramMap.subscribe( params => {
            const namespace         =   params.get( 'namespace' );

            this.tendoo.crud.getCreateConfig( namespace ).subscribe( (config: CrudConfig ) => {
                this.crudConfig     =   config;
                const formControls  =   ValidationGenerator.buildFormControls( this.crudConfig.fields );
                this.crudForm       =   new FormGroup( formControls );
            });
        })
    }

    submit() {
        ValidationGenerator.touchAllFields( this.crudForm );

        if ( this.crudForm.invalid ) {
            return this.snackbar.open( this.crudConfig.labels[ 'create_form_invalid' ] || 'Unable to proceed, the form is not valid', 'OK', {
                duration: 3000
            });
        }

        /**
         * let's disable all the field 
         * before proceed submitting
         */
        ValidationGenerator.deactivateFields( this.crudConfig.fields );

        /**
         * submit the form to the 
         * server
         */
        this.tendoo.crud.postForm( 
            this.crudConfig.namespace,
            this.crudForm.value
        ).subscribe( (result: AsyncResponse) => {
            /**
             * Enable back all disabled fields
             */
            ValidationGenerator.enableFields( this.crudConfig.fields );

            /**
             * generate a notification and 
             * redirect back to the list
             */
            this.snackbar.open( result.message, 'OK',  { duration : 3000 });
            this.router.navigateByUrl( this.crudConfig.links.list );

        }, ( result: HttpErrorResponse ) => {
            /**
             * Enable back all disabled fields
             */
            ValidationGenerator.enableFields( this.crudConfig.fields );
            
            /**
             * An error has occured, let's show why the 
             * error has occured
             */
            this.snackbar.open( result.error.message, 'OK', { duration: 5000 });
        })
    }
    
}
