import { Component, OnInit } from '@angular/core';
import { CrudConfig } from 'src/app/interfaces/crud-config.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TendooService } from 'src/app/services/tendoo.service';
import { Observable, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    crud: CrudConfig;
    page: number;
    namespace: string;
    constructor(
        private route: ActivatedRoute,
        public tendoo: TendooService,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        
        this.loadCrud();
    }

    loadCrud() {
        this.route.paramMap.subscribe( route => {
            this.namespace  =   route.get( 'namespace' );
            this.page       =   +route.get( 'page' );

            this.tendoo.crud.getConfig( this.namespace ).subscribe( (crud: CrudConfig ) => {
                this.crud   =   crud;
            }, error => {
                this.snackbar
                    .open( 'Unable to load the crud component.', 'TRY AGAIN' )
                    .afterDismissed()
                    .subscribe( observer => {
                        this.loadCrud();
                })
            });
        })
    }
    
    /**
     * 
    **/
    sortData( data ) {
        console.log( data );
    }

    /**
     * 
    **/
    deleteEntries( data ) {
        console.log( data );
    }

    /**
     * 
    **/
    doAction( data ) {
        console.log( data );
    }

    /**
     * 
    **/
    searh( data ) {
        console.log( data );
    }

}
