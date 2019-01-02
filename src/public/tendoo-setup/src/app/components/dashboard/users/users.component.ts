import { Component, OnInit } from '@angular/core';
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

export interface PeriodicElement {
    id: number;
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    columns: string[]                       =   [];
    rawColumns: TableColumnInterface        =   {};
    source:TableEntryInterface[]            =   [];
    reservedColumns: string[]               =   [ '$actions' ];

    constructor(
        public tendoo: TendooService,
        public router: Router,
        public dialog: MatDialog,
        public snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        forkJoin(
            this.tendoo.users.getUsers(),
            this.tendoo.tables.getColumns( 'dashboard.users' )
        )
        .subscribe( ( response ) => {
            this.rawColumns     =   <TableColumnInterface>response[1];
            this.columns        =   Object.keys( this.rawColumns );
            this.source         =   <TableEntryInterface[]>response[0];
        })
    }

    sortData( event ) {
        console.log( event );
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
}
