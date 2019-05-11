import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogComponent, Dialog } from '@cloud-breeze/core';

@Component({
    selector: 'app-medias-details',
    templateUrl: './medias-details.component.html',
    styleUrls: ['./medias-details.component.css']
})
export class MediasDetailsComponent implements OnInit {
    media: any;
    editEnabled        =   false;
    constructor(
        public tendoo: TendooService,
        private activatedRoute: ActivatedRoute,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
        private router: Router
    ) { }
    
    ngOnInit() {
        
        this.tendoo.dashboardTitle( 'Loading Media...' );

        this.activatedRoute.paramMap.subscribe( query => {
            const mediaId   =   query.get( 'id' );
            this.tendoo.medias.getMedia( mediaId ).subscribe( media => {
                this.media  =   media;
                this.tendoo.dashboardTitle( 'Details : ' + this.media.name );
            }, ( error ) => {
                this.snackbar.open( 'Unable to open this media, it may have been deleted or it doesn\'t exists' )
            })
        })
    }

    toggleEdition() {
        this.editEnabled = !this.editEnabled;
        if ( this.editEnabled ) {
            this.tendoo.medias.downloadMedia( this.media.id ).subscribe( result => {
                console.log( result );
            })
        }
    }

    convertImageToBase64() {
        
    }

    deleteMedia() {
        this.dialog.open( DialogComponent, {
            id: 'delete-media',
            data: <Dialog> {
                title: 'Confirm Your Action',
                message: 'Would you like to delete this media ?',
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'delete',
                        onClick: () => {
                            this.tendoo.medias.deleteMediaById( this.media.id ).subscribe( (result: AsyncResponse ) => {
                                this.dialog.getDialogById( 'delete-media' ).close();
                                this.router.navigateByUrl( 'dashboard/medias/page/1' );
                                this.snackbar.open( result.message, 'OK', { duration: 3000 });
                            }, (result: HttpErrorResponse) => {
                                this.snackbar.open( result.error.message || 'An error occured.', 'OK' );
                            })
                        }
                    }, {
                        label: 'No',
                        namespace: 'cancel',
                        onClick: () => {
                            this.dialog.getDialogById( 'delete-media' ).close();
                        }
                    }
                ]
            }
        })
    }
    
    rotate( direction: string ) {
        ;
    }
}
