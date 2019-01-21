import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooCrudService extends LoaderService {
    getColumns( namespace ) {
        return this.get( this.baseUrl + 'tendoo/crud/' + namespace + '/columns' );
    }

    private serialize( obj ) {
        var str = [];
        for ( var p in obj ) {
            if (obj.hasOwnProperty(p)) {
                str.push( encodeURIComponent( p ) + "=" + encodeURIComponent( obj[p] ) );
            }
        }
        return str.join( '&' );
    }

    /**
     * Get entries for a defined Crud Resource
     * @param namespace crud namespace
     * @return Observable<TableEntries>
     */
    getEntries( namespace, params: { [ key:string ]: string } = null ) {
        return this.get( this.baseUrl + 'tendoo/crud/' + namespace + ( params !== null ? '?' + this.serialize( params ) : '' ) );
    }

    /**
     * delete selected entries
     * @param array of id
     * @return Observable<AsyncResponse>
     */
    deleteBulkEntries( namespace: string, ids: number[] ) {
        return this.post( this.baseUrl + 'tendoo/crud/' + namespace + '/bulk-actions', { 
            entries_id : ids,
            action : 'bulk-delete'
        })
    }
}
