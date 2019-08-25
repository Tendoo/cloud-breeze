import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { CrudConfig } from 'src/app/interfaces/crud-config.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TendooService } from 'src/app/services/tendoo.service';
import { Observable, forkJoin, Observer, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreEvent } from 'src/app/classes/core-event.class';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreAction } from 'src/app/interfaces/core-action';
import { CrudPageChange, TableConfig } from '@cloud-breeze/core';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {
    crud: TableConfig;
    page: number;
    namespace: string;
    crudConfigSubscription: Subscription;
    routeParamSubscription: Subscription;
    constructor(
        private activatedRoute: ActivatedRoute,
        public tendoo: TendooService,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
        private coreEvent: CoreEvent,
        private route: Router
    ) { }
    
    ngOnInit() {
        this.coreEvent.subscribe( (action: CoreAction ) => {
            if ( action.type === 'crud.action.success' ) {
                this.loadCrudData();
            }
        });

        this.loadCrud();
    }

    /**
     * while destroying let's destroy the subscriber
     */
    ngOnDestroy() {
    }

    handlePage( page: CrudPageChange ) {
        this.loadCrudData({ page: (+(page.pageIndex) + 1).toString() });
    }

    loadCrud() {
        this.tendoo.dashboardTitle( 'Loading...' );
        this.routeParamSubscription     =   this.activatedRoute.paramMap.subscribe( route => {
            this.namespace  = route.get('namespace');
            this.page       = +route.get('page');    
            this.loadCrudData();
        });
    }
    
    private loadCrudData( params = null ) {
        this.tendoo.crud.getConfig(this.namespace, params ).subscribe((crud: TableConfig) => {
            this.crud           =   crud;
            this.tendoo.dashboardTitle( crud.labels.list_title );
        }, error => {
            this.snackbar
                .open('Unable to load the crud component.', 'TRY AGAIN')
                .afterDismissed()
                .subscribe(observer => {
                    if (observer.dismissedByAction) {
                        this.loadCrud();
                    }
                });
        });
    }

    handleRefresh( crud )
    {
        this.loadCrudData();
    }

    /**
     * 
    **/
    sortData( data ) {
        this.loadCrudData( data );
    }

    /**
     * 
    **/
    deleteEntries( requestData ) {
        const { dialog }    =   requestData;
        const action        =   this.tendoo.crud
            .performBulkAction( this.namespace, {
                entries_id  :   requestData.entries.map( entry => entry.id ),
                action: 'delete_selected'
            }).subscribe( data => {
                this.loadCrudData();
                this.dialog.getDialogById( dialog.id )
                    .close();
                this.coreEvent.emit({
                    type: 'crud.bulk.success',
                    data
                });
            }, ( result:HttpErrorResponse ) => {
                this.dialog.getDialogById( dialog.id )
                    .close();
                this.coreEvent.emit({
                    type: 'crud.bulk.failed',
                    data: result.error
                });
            });        
    }

    /**
     * perform a specific action by 
     * sending a request to the server
     * @param object data
     * @return void
    **/
    doAction( actionData ) {  
        if ( [ 'post', 'get', 'put', 'delete' ].includes( actionData.menu.type.toLowerCase() ) ) {
            this.tendoo.crud
                .performAction( this.namespace, actionData )
                .subscribe( data => {
                    this.dialog
                        .getDialogById( actionData.menu.namespace )
                        .close();
                    this.coreEvent.emit({
                        type: 'crud.action.success',
                        data: Object.assign( data, actionData )
                    })          
            }, (data: HttpErrorResponse) => {
                this.dialog
                    .getDialogById( actionData.menu.namespace )
                    .close();
                this.coreEvent.emit({
                    type: 'crud.action.failed',
                    data: Object.assign( data.error, actionData )
                });
            });
        } else if ( actionData.menu.type === 'GOTO' ) {
            this.route.navigateByUrl( actionData.url );
        } else {
            this.snackbar.open( 'An error occured. The action to be formed does\'nt provide a valid method', 'OK', { duration: 3000 });
        }          
    }

    /**
     * 
    **/
    searh( data ) {
        console.log( data );
    }

}
