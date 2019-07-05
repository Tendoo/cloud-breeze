import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { TableColumn, TableConfig } from '../../interfaces/crud-config.interface';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog } from '../../interfaces/dialog';

@Component({
    selector: 'cb-table',
    templateUrl: './crud-table.component.html',
    styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit, OnDestroy {
    @Input( 'crud' ) crud: TableConfig;
    @Input( 'is-loading' ) isLoading: boolean   =   false;
    
    @Output( 'sort' ) sort              =   new EventEmitter();
    @Output( 'delete' ) delete          =   new EventEmitter();
    @Output( 'action' ) action          =   new EventEmitter();
    @Output( 'search' ) searchEvent     =   new EventEmitter();
    @Output( 'refresh' ) refresh        =   new EventEmitter();

    columnsNames: string[]                  =   [];
    searchEnabled                           =   false;
    reservedColumns: string[]               =   [ '$actions' ];
    searchValue                             =   '';
    checkAll: any;
    columns: TableColumn;
    noResponseMsg: string                   =   'The action has returned no response';
    labels                                  =   {
        search  :   'Search'
    }
    
    constructor(
        private dialog: MatDialog,
        private router: Router,
        private snackbar: MatSnackBar,
    ) { }
    
    ngOnInit() {
        this.columnsNames       =   Object.keys( this.crud.columns );
        this.columns            =   this.crud.columns;
    }

    ngOnDestroy() {
    }

    sortData( event ) {
        this.sort.emit( event );
    }

    search( field: HTMLInputElement ) {
        if ( field.value.length !== 0 ) {
            return this.searchEvent.emit( 
                field.value.length
            );
        } 
        return this.snackbar.open( 'You need to input something to search.', 'OK', { duration: 3000 });
    }

    toggleRefresh() {
        this.refresh.emit({
            crud : this.crud
        });
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
            this.dialog.open( DialogComponent, {
                id: menu.namespace,
                data: <Dialog>{
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
        this.action.emit({ menu, url });
    }

    /**
     * Make sure to toggle all
     * checkboxes when the main checkbox
     * is clicked
     * @return void
     */
    checkAllCheckboxes() {
        this.crud.results[ 'data' ].forEach( checkbox => {
            checkbox.$checked       =   this.checkAll;
        });
    }

    /**
     * delete selected entries
     * @param entries
     * @return void
     */
    deleteSelectedEntries() {
        this.dialog.open( DialogComponent, {
            id: 'bulk.action',
            data: <Dialog>{
                title: 'Please Confirm Your Action',
                message: 'Would you like to delete all the selected users ? This action can\'t be canceled !',
                buttons: [
                    {
                        label: 'Delete',
                        namespace: 'delete.selected',
                        onClick: () => {
                            this.delete.emit({
                                entries: this.selectedEntries,
                                dialog: { 
                                    id: 'bulk.action'
                                }
                            });
                        }
                    }, {
                        label: 'Cancel',
                        namespace: 'cancel',
                        onClick: () => {
                            this.dialog.getDialogById( 'bulk.action' ).close();
                        }
                    }
                ]
            }
        })
    }
    
    /**
     * canceled all selected entries
     * @return void
     */
    cancel() {
        this.crud.results[ 'data' ].forEach( entry => entry.$checked = false );
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
        return this.crud.results[ 'data' ] !== undefined ? this.crud.results[ 'data' ].filter( entry => entry.$checked ) : [];
    }    
}
