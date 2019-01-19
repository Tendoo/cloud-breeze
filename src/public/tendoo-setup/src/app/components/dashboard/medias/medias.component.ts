import { Component, OnInit } from '@angular/core';
import { TendooMediasService } from 'src/app/services/tendoo-medias.service';
import { Media } from 'src/app/interfaces/media';
import { forkJoin } from 'rxjs';
import { PaginatedResponse } from 'src/app/interfaces/paginated-response';

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

    constructor(
        private mediaService: TendooMediasService
    ) { }
    
    ngOnInit() {
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
        setTimeout( () => {
            this.bulkSelectEnabled  =   true;
        }, 1000 );
    }

    /**
     * select item
     */
}
