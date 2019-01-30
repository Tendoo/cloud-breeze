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
     * Get a CRUD configuration along with entries
     * @param namespace crud namespace
     * @param params route parameters
     */
    getConfig( namespace, params: { [ key:string ]: string } = null ) {
        return this.get( this.baseUrl + 'tendoo/crud/' + namespace + '/config' + ( params !== null ? '?' + this.serialize( params ) : '' ) );
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

    /**
     * Get form create config
     * @param string namespace
     * @return observable
     */
    getCreateConfig( namespace: string ) {
        return this.get( `${this.baseUrl}tendoo/crud/${namespace}/create-config` );
    }

    /**
     * post form
     * @param string namespace
     * @param object data
     * @return observable.
     */
    postForm( namespace: string, data: {[ key:string]: string | boolean | number }) {
        return this.post( `${this.baseUrl}tendoo/crud/${namespace}`, data );
    }

    /**
     * act as a guard to proceed a crud instance
     * @param object {type: string, namespace: string }
     * @return Observable<AsyncResponse>
     */
    canAccess( data ) {
        const { namespace, type }   =   data;
        return this.post( `${this.baseUrl}tendoo/crud/${namespace}/can-access`, { type });
    }
}
