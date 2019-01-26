import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';

@Component({
	selector: 'app-menu-list',
	templateUrl: './menu-list.component.html',
	styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
	@Input( 'menus' ) sidebarMenus: Menu[] 	=	[];

	constructor(
		private router: Router,
	) { 
	}

	ngOnInit() {
	}

	/**
	 * Open/close current menu
	 * @param object menu
	 * @todo probably a bad pratice
	 */
	toggle( index:number ) {
		this.sidebarMenus.forEach( ( menu, __index ) => {
			if ( __index === index ) {
				menu.open 	=	menu.open ? !menu.open : true;
			} else {
				menu.open 	=	false;
			}
		})
	}

	/**
	 * Close All menus
	 * @return void
	 */
	closeAll() {
		this.sidebarMenus.forEach( menu => {
			menu.open 	=	false;
		});
	}

	/**
	 * GoTo
	 * @return void
	 */
	goTo( menu:Menu ) {

		// navigate to the menu path
		this.router.navigateByUrl( menu.href );
	}
	
}
