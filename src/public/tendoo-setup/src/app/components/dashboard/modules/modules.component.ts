import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { TendooModule } from 'src/app/interfaces/module.interface';
import { CoreEvent } from 'src/app/classes/core-event.class';
import { DialogComponent, Dialog } from '@cloud-breeze/core';
import { MigrationDialogComponent } from '../../migration-dialog/migration-dialog.component';
import { LoaderService } from 'src/app/services/loader.service';

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
        private coreEvent: CoreEvent,
    ) { }
    
    ngOnInit() {
        this.tendoo.dashboardTitle( 'Modules List' );
        this.loadModules();
    }
    
    loadModules() {
        this.tendoo.modules.getAll().subscribe( (modules:any[]) => {
            this.modules    =   Object.values( modules ).map( module => {
                module.isLoading = false;
                return module;
            });
        })
    }

    private __deleteModule( module ) {
        module.isLoading    =   true;
        this.tendoo.modules.deleteModule( module.namespace ).subscribe( (result:AsyncResponse ) => {
            this.snackbar.open( result.message, null, { duration: 3000 });

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
            module.isLoading    =   false;
            this.snackbar.open( result.error.message, 'OK' );
        })
    }

    /**
     * delete a module
     * @return void
     */
    delete( module: TendooModule ) {
        this.dialog.open( DialogComponent, {
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
    private __proceedEnableModule( module: TendooModule ) {
        this.dialog.open( DialogComponent, {
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
        this.dialog.open( DialogComponent, {
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
        module.isLoading    =   true;
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

            if ( result.error.class === 'Tendoo/Core/Exceptions/ModuleMigrationRequiredException' ) {
                this.dialog.open( MigrationDialogComponent, {
                    id: 'migration-dialog',
                    data: {
                        migrations: result.error.migration,
                        module
                    },
                    closeOnNavigation: false,
                    disableClose: true,
                })
                .afterClosed()
                .subscribe( result => {
                    this.__enableModule( module );
                })

            } else {
                module.isLoading    =   false;
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
    private __disableModule( module: TendooModule )
    {
        module.isLoading    =   true;
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
            module.isLoading    =   false;
            this.snackbar.open( result.error.message, null, {
                duration: 4000
            });
            this.dialog
                .getDialogById( 'disable-enable-module' )
                .close();
        })
    }

    /**
     * Download a module
     * @param {object} module
     * @return void
     */
    download( module: TendooModule ) {
        module.isLoading    =   true;
        this.tendoo.links.signed( 'extract.module', {
            namespace: module.namespace
        }).subscribe( (result: any) => {
            this.tendoo.post( result.url, {
                'token'         : result.token
            }, {
                responseType: 'blob',
                headers: Object.assign({}, {
                    'Content-Type'  :   'application/zip'
                }, LoaderService.headers ),
            }).subscribe( result => {
                module.isLoading    =   false;
                const url           =   window.URL.createObjectURL( result );
                const anchor = document.createElement("a");
                anchor.download = module.namespace.toLocaleLowerCase() + '-' + module.version + '.zip';
                anchor.href = url;
                anchor.click()
            }, ( error ) => {
                module.isLoading    =   false;
                this.snackbar.open( 'An error has occured while downloading the module', 'OK', { duration : 3000 });
            })
        })        
    }

    get isLoading() {
        return this.tendoo.links.isLoading || this.tendoo.modules.isLoading;
    }

    createSymlink( module: TendooModule ) {
        module.isLoading    =   true;
        this.tendoo.modules.createSymLink( module.namespace )
            .subscribe( result => {
                module.isLoading    =   false;
                const snack     =   this.snackbar.open( 'A symbolic link has been created for that module', 'OK', { duration: 3000 });                
            }, (result: HttpErrorResponse ) => {
                module.isLoading    =   false;
                this.snackbar.open( result.error.message || 'An error has occured during the process', 'OK' );
            })
    }

    /**
     * reset module migration
     */
    resetMigration( module: TendooModule ) {
        this.dialog.open( DialogComponent, {
            id: 'reset-migration-dialog',
            data: <Dialog>{
                title: 'Resetting Module Migration',
                message: `Would you like to confirm this action ? All migration will be reverted and your data will be lost`,
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => {
                            module.isLoading    =   true;
                            this.tendoo.modules.resetMigrations( module ).subscribe( result => {
                                module.isLoading        =   false;
                                const { migrations }    =   result[ 'data' ];

                                this.dialog.getDialogById( 'reset-migration-dialog' ).close();;
                                this.dialog.open( MigrationDialogComponent, {
                                    id: 'migration-dialog',
                                    data: { migrations, module },
                                    closeOnNavigation: false,
                                    disableClose: true,
                                });
                            })
                        }
                    }, {
                        label: 'Cancel',
                        onClick: () => {
                            this.dialog.getDialogById( 'reset-migration-dialog' ).close();
                        }
                    }
                ]
            }
        })
    }
}
