import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TendooUsersService } from 'src/app/services/tendoo-users.service';
import { TendooService } from 'src/app/services/tendoo.service';
import { Observable, forkJoin } from 'rxjs';
import { TableColumnInterface } from 'src/app/interfaces/table-column.interface';
import { TableEntryInterface } from 'src/app/interfaces/table-entry.interface';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { TableConfig } from 'src/app/interfaces/table-config.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    columns: string[]                       =   [];
    rawColumns: TableColumnInterface        =   {};
    crudResult                              =   {};
    searchEnabled                           =   false;
    reservedColumns: string[]               =   [ '$actions' ];
    searchValue                             =   '';
    tableConfig: TableConfig;
    checkAll: any;
    @ViewChild( 'searchField' ) searchField: ElementRef;

    constructor(
        public tendoo: TendooService,
        public router: Router,
        public dialog: MatDialog,
        public snackbar: MatSnackBar
    ) { 
        this.tendoo.dashboardTitle( 'Users' );
    }
    
    ngOnInit() {
        this.tableConfig        =   {
            search: {
                placeholder: 'Search a user'
            }
        }
        this.loadUsers();
    }

    serialize( obj ) {
        var str = [];
        for ( var p in obj ) {
            if (obj.hasOwnProperty(p)) {
                str.push( encodeURIComponent( p ) + "=" + encodeURIComponent( obj[p] ) );
            }
        }
        return str.join( '&' );
    }

    search( field: HTMLInputElement ) {
        if ( field.value.length !== 0 ) {
            return this.tendoo.crud.getEntries( 'tendoo.dashboard.users', {
                search : field.value
            }).subscribe( ( entries: any ) => {
                this.crudResult     =   entries;
            });
        } 
        return this.snackbar.open( 'You need to input something to search.', 'OK', { duration: 3000 });
    }
    
    /**
     * init the users component
     * and load all data
     */
    loadUsers() {
        forkJoin(
            this.tendoo.crud.getEntries( 'tendoo.dashboard.users' ),
            this.tendoo.crud.getColumns( 'tendoo.dashboard.users' )
        )
        .subscribe( ( response ) => {
            this.rawColumns     =   <TableColumnInterface>response[1];
            this.columns        =   Object.keys( this.rawColumns );
            this.crudResult     =   <TableEntryInterface[]>response[0];
        }, ( error ) => {
            this.snackbar.open( 'An error occured while loading the users.', 'TRY AGAIN' )
                .afterDismissed()
                .subscribe( action => {
                    if ( action.dismissedByAction ) {
                        this.loadUsers();
                    }
                })
        })
    }

    sortData( event ) {
        this.tendoo
            .crud
            .getEntries( 'tendoo.dashboard.users', event )
            .subscribe( ( response: TableEntryInterface[] ) => {
            this.crudResult         =   response;
        })
    }

    /**
     * trigger menu
     * @param object menu
     * @return void
     */
    triggerMenu( menu, row ) {
        /**
         * build the url based on the 
         * configuration.
         */
        const url   =   menu.url.replace( "#", row[ menu.index || 'id' ] );

        if ( menu.confirm !== undefined ) {
            console.log( menu.namespace );
            this.dialog.open( ConfirmDialogComponent, {
                id: menu.namespace,
                data: <ConfirmDialogObject>{
                    title: menu.confirm.title,
                    message: menu.confirm.message,
                    buttons: [
                        {
                            label: 'Ok',
                            namespace: 'ok',
                            onClick: () => {
                                this.__proceedAction( menu, url );
                            }
                        }, {
                            label: 'Cancel',
                            namespace: 'cancel',
                            onClick: () => {
                                this.dialog.getDialogById( menu.namespace )
                                    .close();
                            }
                        }
                    ]
                }
            });
        } else {
            this.__proceedAction( menu, url );
        }
    }
    
    /**
     * Proceed action after having
     * checked if that action require a confirmation
     * @param object menu
     * @return void
     */
    private __proceedAction( menu, url ) {
        switch( menu.type ) {
            case 'DELETE':
                this.tendoo.delete( url ).subscribe( (result: AsyncResponse ) => {
                    this.ngOnInit();
                    this.dialog.getDialogById( menu.namespace ).close();
                    return this.snackbar.open( result.message, 'OK', {
                        duration: 4000 
                    });
                }, (result: HttpErrorResponse ) => {
                    this.dialog.getDialogById( menu.namespace ).close();
                    return this.snackbar.open( result.error.message, 'OK', {
                        duration: 4000 
                    });
                })
            break;
            case 'GET':
                this.tendoo.get( url )
            break;
            case 'GOTO':
                this.router.navigateByUrl( url );
            break;
        }
    }

    /**
     * Make sure to toggle all
     * checkboxes when the main checkbox
     * is clicked
     * @return void
     */
    checkAllCheckboxes() {
        this.crudResult[ 'data' ].forEach( checkbox => {
            checkbox.$checked       =   this.checkAll;
        })
    }

    /**
     * delete selected entries
     * @param entries
     * @return void
     */
    deleteSelectedEntries( entries ) {
        this.dialog.open( ConfirmDialogComponent, {
            id: 'delete.all.popup',
            data: <ConfirmDialogObject>{
                title: 'Please Confirm Your Action',
                message: 'Would you like to delete all the selected users ? This action can\'t be canceled !',
                buttons: [
                    {
                        label: 'Delete',
                        namespace: 'delete.all',
                        onClick: () => {
                            this.dialog.getDialogById( 'delete.all.popup' ).close();
                            const result    =   <Observable<AsyncResponse>>this.confirmDeleteSelected();

                            /**
                             * if no error has been thrown
                             */
                            if ( result instanceof Observable ) {
                                result.subscribe( response => {
                                    /**
                                     * reload the users to 
                                     * reflect the changes
                                     */
                                    this.loadUsers();
                                    
                                    this.snackbar.open( response.message, 'OK', {
                                        duration: 3000
                                    });
                                }, (result: HttpErrorResponse ) => {
                                    this.snackbar.open( result.error.message );
                                })
                            } else {
                                /**
                                 * this happen when there is a misconfiguration 
                                 * of an entity, for instance TendooUsersService.
                                 */
                                this.snackbar.open( 'A misconfiguration of an entity has occured ! ', 'OK', {
                                    duration: 10000
                                });
                            }
                        }
                    }, {
                        label: 'Cancel',
                        namespace: 'cancel',
                        onClick: () => {
                            this.dialog.getDialogById( 'delete.all.popup' ).close();
                        }
                    }
                ]
            }
        })
    }

    /**
     * Confirm delete all selected entries
     * @return void
     */
    confirmDeleteSelected() {
        return this.tendoo.crud.deleteBulkEntries( 'tendoo.dashboard.users', this.selectedEntries.map( entry => entry.id ) )
    }

    /**
     * get if it has a selected entries
     * @return boolean
     */
    get hasSelectedEntries(): boolean {
        return this.selectedEntries.length > 0;
    }

    /**
     * return selected entries
     * @return array
     */
    get selectedEntries() {
        return this.crudResult[ 'data' ] !== undefined ? this.crudResult[ 'data' ].filter( entry => entry.$checked ) : [];
    }

    /**
     * canceled all selected entries
     * @return void
     */
    cancel() {
        this.crudResult[ 'data' ].forEach( entry => entry.$checked = false );
        this.checkAll   =   false;
    }

    /**
     * toggle search. Enable /disable according
     * to the provided parameter
     * @return void
     */
    toggleSearch( param: boolean ) {
        if ( param ) {
            this.searchEnabled = true;
            setTimeout( () => {
                document.getElementById( 'search-field' ).focus();
            }, 100 );
        } else {
            this.searchEnabled  =   false;
            this.searchValue    =   '';
        }
    }
}
