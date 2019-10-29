import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { TableAction } from '../interfaces/crud-config.interface';
import { AsyncResponse } from '../interfaces/async-response';
import { Observable } from 'rxjs';

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
    getEntries( namespace, params: { [ key:string ]: string|number } = null ) {
        return this.get( this.baseUrl + 'tendoo/crud/' + namespace + ( params !== null ? '?' + this.serialize( params ) : '' ) );
    }
    
    /**
     * Get a CRUD configuration along with entries
     * @param namespace crud namespace
     * @param params route parameters
     */
    getConfig( namespace, params: { [ key:string ]: string|number } = null ) {
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
     * Performa a specific action to the server
     * @param namespace crud namespace
     * @param entry data
     */
    performAction( namespace: string, entry: TableAction ) :Observable<AsyncResponse> | null {
        const method  =   entry.menu.type.toLowerCase();

        return <Observable<AsyncResponse>>this[ method ]( `${this.baseUrl}${entry.url}`, entry.menu );
    }

    /**
     * Proceed to a bulk action
     * @param namespace crud namespace
     * @param config config object
     */
    performBulkAction( namespace: string, config ) {
        return this.post( `${this.baseUrl}tendoo/crud/${namespace}/bulk-actions`, config );
    }

    /**
     * Get form create config
     * @param string namespace
     * @return observable
     */
    getFormConfig( namespace: string, id: number = null ) {
        const param = id === null ? '' : `/${id}`;
        return this.get( `${this.baseUrl}tendoo/crud/${namespace}/form-config${param}` );
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
     * Put a form request to a crud instance.
     * @param namespace crud resource namespace
     * @param id of the current entity
     * @param data form data
     */
    putForm( namespace: string, id: number, data ) {
        return this.put( `${this.baseUrl}tendoo/crud/${namespace}/${id}`, data );
    }

    /**
     * act as a guard to proceed a crud instance
     * @param object {type: string, namespace: string }
     * @return Observable<AsyncResponse>
     */
    canAccess( data ) {
        const { namespace, type }   =   data;
        return this.post( `${this.baseUrl}tendoo/crud/${namespace}/can-access`, data );
    }
}
