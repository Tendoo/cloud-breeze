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
    constructor(
        private mediaService: TendooMediasService
    ) { }
    
    ngOnInit() {
        forkJoin([
            this.mediaService.getMedias()
        ]).subscribe( ( results ) => {
            this.pagination     =   (<PaginatedResponse>results[0]);
            this.medias         =  this.pagination.data;
        });
    }
    
}
