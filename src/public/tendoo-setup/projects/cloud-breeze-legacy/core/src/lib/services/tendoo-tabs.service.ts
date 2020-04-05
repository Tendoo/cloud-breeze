import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Tab } from '../interfaces/tab';
import { Observable, ObservableInput, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TendooTabsService extends LoaderService {
    slug: string    =   'tendoo/tabs';
    getTabs( name: string ) {
        return this.get( `${this.baseUrl}${this.slug}/${name}` ).pipe( 
            map( entries => entries ),
            catchError( ( result ) => {
                this.snackbar.open( result.error.message );
                return of(result);
            })
        )
    }
}
