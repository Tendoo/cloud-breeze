import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { Tab } from 'src/app/interfaces/tab';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    tabs: Tab[];
    constructor(
        public tendoo: TendooService,
        public snackbar: MatSnackBar
    ) { 
        this.tendoo.dashboardTitle( 'Application Settings' );
    }
    
    ngOnInit() {
        this.tendoo.tabs.getTabs( 'dashboard.settings' ).subscribe( tabs => {
            tabs.forEach( ( tab: Tab, index ) => {
                index === 0 ? tab.active    =   true : tab.active = false;
                const fields    =   ValidationGenerator.buildFormControls( tab.fields );
                tab.form        =   new FormGroup( fields );
            });
            this.tabs   =   tabs;
        });
    }
    
    /**
     * Save the current tab settings
     * @return any
     */
    saveSettings() {
        console.log( this.activeTab );

        ValidationGenerator.touchAllFields( this.activeTab.form );

        if ( ! this.activeTab.form.valid ) {
            return this.snackbar.open( 'Unable to proceed, the form is invalid', 'OK', {
                duration: 3000
            });
        }

        /**
         * let's save the form 
         * to the database
         */
        ValidationGenerator.deactivateFields( this.activeTab.fields );
        this.tendoo.forms
            .saveForm( this.activeTab.namespace, this.activeTab.form.value )
            .subscribe( (result: AsyncResponse ) => {
                ValidationGenerator.enableFields( this.activeTab.fields );
                this.snackbar.open( result.message, 'OK', {
                    duration: 3000
                });
            }, (result: HttpErrorResponse) => {
                ValidationGenerator.enableFields( this.activeTab.fields );
                this.snackbar.open( result.error.message );
            }
        );
    }

    /**
     * set a tab as active
     * @param $event
     */
    setTabActive( index ) {
        this.tabs.forEach( (_tab, _index ) => {
            _tab.active         =   false;
            if ( index === _index ) {
                _tab.active     =   true;
            } 
        });

        console.log( this.activeTab );
    }
 
    /**
     * get the current active tab
     */
    get activeTab() {
        return this.tabs.filter( tab => tab.active )[0];
    }
}
