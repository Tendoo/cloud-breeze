import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudConfig } from 'src/app/interfaces/crud-config.interface';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { MediaObserver } from '@angular/flex-layout';

@Component({
    selector: 'app-crud-edit',
    templateUrl: './crud-edit.component.html',
    styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {
    crudConfig: CrudConfig;
    crudForm: FormGroup;
    id: number;
    isMobile    =   false;

    constructor(
        private route: ActivatedRoute,
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        public router: Router,
        public mediaObserver: MediaObserver
    ) { }
    
    ngOnInit() {
        this.tendoo.dashboardTitle( 'Loading...' );

        this.route.paramMap.subscribe( params => {
            const namespace         =   params.get( 'namespace' );
            this.id                 =   +params.get( 'id' );

            this.tendoo.crud.getFormConfig( namespace, this.id ).subscribe( (config: CrudConfig ) => {
                this.crudConfig     =   config;
                const formControls  =   ValidationGenerator.buildFormControls( this.crudConfig.fields );
                this.crudForm       =   new FormGroup( formControls );
                this.tendoo.dashboardTitle( this.crudConfig.labels.edit_title );
            }, (result: HttpErrorResponse) => {
                this.snackbar.open( result.error.message, 'OK' );
            });
        });

        this.mediaObserver.media$.subscribe( media => {
            switch( media.mqAlias ) {
                case 'xs':
                case 'sm':
                    this.isMobile   =   true;
                break;
                default:
                    this.isMobile   =   false;
                break;
            }
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
        this.tendoo.crud.putForm( 
            this.crudConfig.namespace,
            this.id,
            this.crudForm.value
        ).subscribe( (result: AsyncResponse) => {
            /**
             * Enable back all disabled fields
             */
            // ValidationGenerator.enableFields( this.crudConfig.fields );

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
