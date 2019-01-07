import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { TendooAuthService } from 'src/app/services/tendoo-auth.service';
import { forkJoin } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Tab } from 'src/app/interfaces/tab';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    host: {
        style: `height: 100%`
    }
})
export class ProfileComponent implements OnInit {
    auth: TendooAuthService;
    tabs: Tab[];
    profileForm: FormGroup;

    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar
    ) { 
        this.auth   =   this.tendoo.auth;
    }
    
    ngOnInit() {
        forkJoin(
            this.tendoo.tabs.getTabs( 'dashboard.profile' )
        ).subscribe( results => {
            this.tabs   =   (<Tab[]>results[0]);
            this.tabs.forEach( (tab, index ) => {
                index === 0 ? tab.active = true : tab.active = false;
                const fields    =   ValidationGenerator.buildFormControls( tab.fields );
                tab.form        =   new FormGroup( fields );
            });
        })
    }

    /**
     * set a tab as active
     * @param tab Tab Object
     * @return void
     */
    setTabActive( tab ) {
        tab.active  =   tab.active === undefined ? true : ! tab.active;
    }

    saveTabSettings( tab: Tab ) {
        ValidationGenerator.touchAllFields( tab.form );

        if ( ! tab.form.valid ) {
            return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', {
                duration: 3000
            });
        }

        /**
         * Save the settings to the database
         */
        ValidationGenerator.deactivateFields( tab.fields );

        this.tendoo.forms
            .saveForm( 
                'dashboard.profile', 
                ValidationGenerator.noNullValue( tab.form ) 
            ).subscribe( (response: AsyncResponse ) => {

            /**
             * Enable back field and show success
             * message
             */
            ValidationGenerator.enableFields( tab.fields );
            this.snackbar.open( response.message, 'OK', {
                duration: 3000
            });

        }, ( result:HttpErrorResponse ) => {
            ValidationGenerator.enableFields( tab.fields );
            ValidationGenerator.throwFieldsError( tab.form, tab.fields, result.error.errors );
            this.snackbar.open( result.error.message, 'OK', {
                duration: 3000
            });
        })
    }
    
    /**
     * get active tab
     * @return object;
     */
    get activeTab() {
        return this.tabs.filter( tab => tab.active )[0];
    }
}
