import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-medias-details',
    templateUrl: './medias-details.component.html',
    styleUrls: ['./medias-details.component.css']
})
export class MediasDetailsComponent implements OnInit {
    media: any;
    constructor(
        public tendoo: TendooService,
        private activatedRoute: ActivatedRoute,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe( query => {
            const mediaId   =   query.get( 'id' );
            this.tendoo.medias.getMedia( mediaId ).subscribe( media => {
                this.media  =   media;
                console.log( this.media );
            }, ( error ) => {
                this.snackbar.open( 'Unable to open this media, it may have been deleted or it doesn\'t exists' )
            })
        })
    }
    
}
