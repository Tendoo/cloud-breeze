import { Component, OnInit } from '@angular/core';
import { TendooModule } from 'src/app/interfaces/module.interface';
import { TendooService } from 'src/app/services/tendoo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tab } from 'src/app/interfaces/tab';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { CoreEvent } from 'src/app/classes/core-event.class';
import { Observable } from 'rxjs';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogComponent } from '@cloud-breeze/core';

@Component({
    selector: 'app-modules-details',
    templateUrl: './modules-details.component.html',
    styleUrls: ['./modules-details.component.css']
})
export class ModulesDetailsComponent implements OnInit {
    module: TendooModule;
    tabs: Tab[]     =   [
        {
            label: 'Details',
            namespace: 'details',
            active: true,
            fields: []
        }, {
            label: 'Changelog',
            namespace: 'changelog',
            active: false,
            fields: []
        }
    ]
    
    constructor(
        public tendoo: TendooService,
        private activateRoute: ActivatedRoute,
        private snackbar: MatSnackBar,
        private coreEvent: CoreEvent,
        private dialog: MatDialog,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.__loadModule().subscribe( module => {
            this.tendoo.dashboardTitle( `Module : ${this.module.name}` );
        });
    }

    private __loadModule() {
        return new Observable( observer => {
            this.activateRoute.paramMap.subscribe( param => {
                let moduleNamespace;
                if ( ( moduleNamespace = param.get( 'namespace' ) ) !== null ) {
                    this.tendoo.modules.getModule( moduleNamespace ).subscribe( ( appModule: TendooModule) => {
                        this.module     =   appModule;
                        observer.next( appModule );
                        observer.complete();
                    }, ( result: HttpErrorResponse ) => {
                        this.snackbar.open( result.error.message || 'Unexpected error occured.', 'RETURN' )
                            .afterDismissed()
                            .subscribe( observer => {
                                if ( observer.dismissedByAction ) {
                                    this.router.navigateByUrl( '/dashboard/modules' );
                                }
                            })
                    })
                }
            })
        }) 
    }
    
    /**
     * enable a module
     * @return void
     */
    toggleModule( action: string ) {
        this.dialog.open( DialogComponent, {
            id: 'toggle-module',
            data: <ConfirmDialogObject>{
                title: 'Confirm your action',
                message: action === 'enable' ? 'Would you enable this module ?' : 'If you disable this module, some feature migth be disabled. Proceed ?',
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'yes',
                        onClick: () => {
                            this.__toggleModule( action );
                            this.dialog.getDialogById( 'toggle-module' ).close();
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: () => {
                            this.dialog.getDialogById( 'toggle-module' ).close();
                        }
                    }
                ]
            }
        })
    }

    toggleTab( tab: Tab ) {
        this.tabs.forEach( (_tab: Tab ) => _tab.active = false );
        tab.active  =   true;
    }

    private __toggleModule( action ) {
        this.tendoo.modules[ action ]( this.module.namespace ).subscribe( (result: AsyncResponse ) => {
            this.snackbar.open( result.message, null, { duration: 3000 });

            this.__loadModule().subscribe( (module) => {
                /**
                 * emit a new event when a module
                 * has his status changed
                 */
                const status    =   action === 'enable' ? 'module.enabled' : 'module.disabled';
    
                this.coreEvent.emit({
                    type: status,
                    data: this.module
                });
            });
        })
    }

    removeModule() {
        this.dialog.open( DialogComponent, {
            id: 'remove-module',
            data: <ConfirmDialogObject>{
                title: 'Confirm your action',
                message: `Do you want to remove the module ${this.module.name} ? Doing that could remove some features.`,
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'yes',
                        onClick: () => {
                            this.dialog.getDialogById( 'remove-module' ).close();
                            this.tendoo.modules.deleteModule( this.module.namespace ).subscribe( (result: AsyncResponse ) => {
                                this.snackbar.open( result.message, null, { duration: 3000 });
                                this.router.navigateByUrl( 'dashboard/modules?notice=module-removed' );
                            });
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: () => {
                            this.dialog.getDialogById( 'remove-module' ).close();
                        }
                    }
                ]
            }
        })
    }
}
