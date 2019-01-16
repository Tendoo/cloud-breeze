import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Link } from '../interfaces/link';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TendooMenusService extends LoaderService {

    /**
     * get menu
     * @return observable of link
     */
    getMenus( namespace: string ): Observable<Link[]> {
        return <Observable<Link[]>>this.get( this.baseUrl + 'tendoo/menus/dashboard.aside' );
    }
}
