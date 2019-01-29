import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { TendooModule } from 'src/app/interfaces/module.interface';
import { CoreEvent } from 'src/app/classes/core-event.class';
import { MigrationDialogComponent } from '../../migration-dialog/migration-dialog.component';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
    modules: any[]      =   [];
    constructor(
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        public dialog: MatDialog,
        private responsive: ResponsiveService,
        private coreEvent: CoreEvent
    ) { }
    
    ngOnInit() {
        this.loadModules();
    }
    
    loadModules() {
        this.tendoo.modules.getAll().subscribe( (modules:any[]) => {
            this.modules    =   Object.values( modules );
        })
    }

    private __deleteModule( module ) {
        this.tendoo.modules.deleteModule( module.namespace ).subscribe( (result:AsyncResponse ) => {
            this.snackbar.open( result.message );

            /**
             * emit a new event when a module
             * is deleted
             */
            this.coreEvent.emit({
                type: 'module.deleted',
                data: module
            });

            this.loadModules();
        }, ( result:HttpErrorResponse ) => {
            console.log( result );
        })
    }

    /**
     * delete a module
     * @return void
     */
    delete( module ) {
        this.dialog.open( ConfirmDialogComponent, {
            id: 'delete.module',
            data: <ConfirmDialogObject>{
                title       :   'Confirm Your Action',
                message     :   'Would you like to delete this module ? This action can\'t be cancelled.',
                buttons 	:	[{
					label 	:	'Ok',
					onClick 	: () => {
						this.dialog
							.getDialogById( 'delete.module' )
                            .close(); 
                        this.__deleteModule( module );
					}
				},{
					label 	:	'Cancel',
					color 	:	'warn',
					onClick 	: () => {
						this.dialog
							.getDialogById( 'delete.module' )
							.close();
					}
				}]
            },
            height 	:	this.responsive.define({
				lg 	: 	'30%',
				xl  : 	'30%',
				md 	: 	'40%',
				sm 	:	'60%',
				xs 	:	'80%'
			}),
			width 	:	this.responsive.define({
				lg 	: 	'40%',
				xl  : 	'40%',
				md 	: 	'40%',
				sm 	:	'70%',
				xs 	:	'95%'
			}),
        })
    }

    /**
     * Change a module
     * status
     * @return void
     */
    setStatus( module, status: string ) {
        switch( status ) {
            case 'enable': 
                this.__proceedEnableModule( module );
            break;
            case 'disable':
                this.__proceedDisableModule( module );
            break;
        }
    }

    /**
     * Proceed Enable Module
     * @return void
     */
    private __proceedEnableModule( module ) {
        this.dialog.open( ConfirmDialogComponent, {
            data: <ConfirmDialogObject>{
                title: 'Please confirm your action',
                message: 'Would you like to enable this module ?',
                buttons: [
                    {
                        label: 'Yes', 
                        namespace: 'yes',
                        onClick: () => {
                            this.__enableModule( module );
                        }
                    }, {
                        label: 'No', 
                        namespace: 'no',
                        onClick: () => {
                            this.dialog
                                .getDialogById( 'confirm-enable-module' )
                                .close();
                        }
                    }
                ]
            },
            id: 'confirm-enable-module'
        })
    }

    /**
     * Proceed Disable Module
     * @return void
     */
    private __proceedDisableModule( module ) {
        this.dialog.open( ConfirmDialogComponent, {
            data: <ConfirmDialogObject>{
                title: 'Please confirm your action',
                message: 'Would you like to disable this module ?',
                buttons: [
                    {
                        label: 'Yes', 
                        namespace: 'yes',
                        onClick: () => {
                            this.__disableModule( module );
                        }
                    }, {
                        label: 'No', 
                        namespace: 'no',
                        onClick: () => {
                            this.dialog
                                .getDialogById( 'disable-enable-module' )
                                .close();
                        }
                    }
                ]
            },
            id: 'disable-enable-module'
        })
    }

    /**
     * Enable module after
     * the action has been confirmed
     * @return void
     */
    private __enableModule( module:TendooModule )
    {
        this.tendoo.modules.enable( module.namespace ).subscribe( response => {

            /**
             * emit a new event when a module
             * is enabled
             */
            this.coreEvent.emit({
                type: 'module.enabled',
                data: module
            });

            this.loadModules();
            this.dialog
                .getDialogById( 'confirm-enable-module' )
                .close();
        }, ( result: HttpErrorResponse ) => {
            console.log( result );
            if ( result.error.class === 'Tendoo/Core/Exceptions/ModuleMigrationRequiredException' ) {
                this.dialog.open( MigrationDialogComponent, {
                    id: 'migration-dialog',
                    data: {
                        migration: result.error.migration
                    },
                    closeOnNavigation: false,
                    disableClose: true,
                })
            } else {
                this.snackbar.open( result.error.message, null, {
                    duration: 4000
                });
            }
            this.dialog
                .getDialogById( 'confirm-enable-module' )
                .close();
        })
    }

    /**
     * Enable module after
     * the action has been confirmed
     * @return void
     */
    private __disableModule( module )
    {
        this.tendoo.modules.disable( module.namespace ).subscribe( response => {

            /**
             * emit a new event when a module
             * is disabled
             */
            this.coreEvent.emit({
                type: 'module.disabled',
                data: module
            });

            this.loadModules();
            this.dialog
                .getDialogById( 'disable-enable-module' )
                .close();
        }, ( result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message, null, {
                duration: 4000
            });
            this.dialog
                .getDialogById( 'disable-enable-module' )
                .close();
        })
    }
}
