import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Link } from '../interfaces/link';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
    providedIn: 'root'
})
export class TendooMenusService extends LoaderService {

    /**
     * get menu
     * @return observable of link
     */
    getMenus( namespace: string ): Observable<Menu[]> {
        return <Observable<Menu[]>>this.get( this.baseUrl + 'tendoo/menus/dashboard.aside' );
    }
}
