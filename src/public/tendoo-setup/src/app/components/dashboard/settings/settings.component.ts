import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { Tab } from 'src/app/interfaces/tab';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { ActivatedRoute, Router } from '@angular/router';
import { Setting } from 'src/app/interfaces/setting';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    tabs: Tab[];
    selectedIndex   =   2;
    constructor(
        public tendoo: TendooService,
        public snackbar: MatSnackBar,
        private routeSnapshot: ActivatedRoute,
        private router: Router
    ) { 
        this.tendoo.dashboardTitle( 'Application Settings' );
    }
    
    ngOnInit() {
        this.routeSnapshot.paramMap.subscribe( param => {
            this.tendoo.settings.getSettings( param.get( 'namespace' ) ).subscribe( ( settings: Setting ) => {

                if ( settings.tabs === undefined ) {
                    this.router.navigateByUrl( '/dashboard/error/settings-misconfiguration' );
                    return;
                }

                settings.tabs.forEach( ( tab: Tab, index ) => {
                    if ( tab.active === undefined ) {
                        tab.active  =   ( index === 0 ) ? true: false;
                    }
                    const fields    =   ValidationGenerator.buildFormControls( tab.fields );
                    tab.form        =   new FormGroup( fields );
                });
    
                this.tabs   =   settings.tabs;
                this.tendoo.dashboardTitle( settings.title );
                this.tendoo.dashboardDescription( settings.description );
                this.detectActiveTab();
            });
        });
    }

    detectActiveTab() {
        this.routeSnapshot.queryParamMap.subscribe( query => {
            let tabIndex    =   -1;

            this.tabs.map( (tab, index) => {
                if ( tab.namespace === query.get( 'tab' ) ) {
                    tabIndex    =   index;
                }
            });

            if ( tabIndex !== -1 ) {
                this.setTabActive( tabIndex );
            }
        })
    }
    
    /**
     * Save the current tab settings
     * @return any
     */
    saveSettings() {
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
                ValidationGenerator.throwFieldsError( this.activeTab.form, this.activeTab.fields, result.error.errors );
                this.snackbar.open( result.error.message, 'CLOSE' );
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
                this.selectedIndex  =   _index;
            } 
        });
    }
 
    /**
     * get the current active tab
     */
    get activeTab() {
        return this.tabs.filter( tab => tab.active )[0];
    }
}
