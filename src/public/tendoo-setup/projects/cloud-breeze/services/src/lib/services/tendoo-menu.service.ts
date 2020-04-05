import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { Menu } from '@cloud-breeze/core';

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
