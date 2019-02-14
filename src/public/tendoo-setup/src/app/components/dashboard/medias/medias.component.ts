import { Component, OnInit, OnDestroy } from '@angular/core';
import { TendooMediasService } from 'src/app/services/tendoo-medias.service';
import { Media } from 'src/app/interfaces/media';
import { forkJoin } from 'rxjs';
import { PaginatedResponse } from 'src/app/interfaces/paginated-response';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { TendooService } from 'src/app/services/tendoo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-medias',
    templateUrl: './medias.component.html',
    styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {
    medias: Media[]         =   [];
    pagination: PaginatedResponse;
    bulkSelectTimeout;
    bulkSelectEnabled       =   false;
    hasJustEnabled          =   false;
    gridCols                =   5;

    constructor(
        private mediaService: TendooMediasService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private mediaObserver: MediaObserver,
        private router: Router,
        public tendoo: TendooService,
    ) { }
    
    ngOnInit() {
        this.tendoo.dashboardTitle( 'Medias' );

        this.loadMedias();
        this.mediaObserver.media$.subscribe( result => {
            console.log( result.mqAlias );
            switch( result.mqAlias ) {
                case 'xs':
                    this.gridCols    =   2;
                break;
                case 'md':
                    this.gridCols    =   4;
                break;
                case 'sm':
                    this.gridCols    =   3;
                break;
                case 'lg':
                    this.gridCols    =   6;
                break;
                case 'xl':
                    this.gridCols    =   8;
                break;
            }
        })
    }

    /**
     * init by loading the medias
     * @return void
     */
    loadMedias() {
        forkJoin([
            this.mediaService.getMedias()
        ]).subscribe( ( results ) => {
            this.pagination     =   (<PaginatedResponse>results[0]);
            this.medias         =  (<Media[]>this.pagination.data).map( media => {
                media.selected  =   false;
                return media;
            });
        });
    }
    
    /**
     * watch bulk select or open media
     * @param Media object to select
     * @return void
     */
    handle( media:Media ) {
        if ( ! this.bulkSelectEnabled ) {
            this.bulkSelectTimeout  =   setTimeout( () => {
                this.bulkSelectEnabled  =   true;
                this.hasJustEnabled     =   true;
                this.toggleSelected( media );
            }, 700 );
        } else {
            this.hasJustEnabled     =   false;
        }
    }

    reset() {
        this.medias.forEach( media => media.selected = false );
        this.bulkSelectEnabled  =   false;
        this.hasJustEnabled     =   false;
    }

    cancelBulkSelect() {
        console.log( 'has canceled' );
        clearTimeout( this.bulkSelectTimeout );
    }
    
    toggleSelected( media: Media ) {
        media.selected  =   media.selected === undefined ? true : ! media.selected;

        /**
         * if no more medias are selected
         * let's disable the selectedMediasCount
         */
        if ( this.selectedMediasCount === 0 ) {
            this.bulkSelectEnabled      =    false;
        }
    }

    /**
     * Redirect to a single page where a media can 
     * be managed
     * @param media object media
     */
    openSingle( media: Media ) {
        if ( ! this.bulkSelectEnabled ) {
            this.router.navigateByUrl( `/dashboard/medias/details/${media.id}` );
        } else if ( ! this.hasJustEnabled ) {
            this.toggleSelected( media );
        }
    }

    /**
     * allow to select all displayed 
     * medias.
     */
    selectAll() {
        this.medias.forEach( media => media.selected = true );
        this.bulkSelectEnabled  =   true;
        this.hasJustEnabled     =   false;
    }

    deleteSelected() {
        this.dialog.open( ConfirmDialogComponent, {
            id: 'delete.medias',
            width: '50%',
            height: '30%',
            data: <ConfirmDialogObject>{
                title: 'Confirm Your Action',
                message: this.selectedMediasCount == 1 ?
                    'Would you like to delete this image ?' : 
                    'Would you like to delete the # selected images ?'.replace( '#', this.selectedMediasCount.toString() ),
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'confirm',
                        onClick: () => {
                            this.confirmDeleteSelected();
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: () => {
                            this.dialog.getDialogById( 'delete.medias' ).close();
                        }
                    }
                ]
            }
        })
    }

    confirmDeleteSelected() {
        this.mediaService.deleteMedia( this.selectedMedias ).subscribe( (result: AsyncResponse ) => {
            this.snackbar.open( result.message, 'OK', { duration : 3000 });
            this.dialog.getDialogById( 'delete.medias' ).close();
            this.loadMedias();
        }, ( error ) => {
            this.snackbar.open( 'An error has occured', null, { duration: 4000 });
            this.dialog.getDialogById( 'delete.medias' ).close();
        });
    }

    /**
     * Computed property to a count of 
     * selected medias.
     * @return number
     */
    get selectedMediasCount() {
        return this.selectedMedias.length;
    }

    /**
     * Computed property to get all
     * selected medias
     * @return Media[]
     */
    get selectedMedias() {
        return this.medias.filter( media => media.selected );
    }
}
