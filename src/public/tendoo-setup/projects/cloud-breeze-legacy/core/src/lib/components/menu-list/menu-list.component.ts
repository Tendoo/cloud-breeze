import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Menu } from '../../interfaces/menu';

@Component({
	selector: 'cb-menu',
	templateUrl: './menu-list.component.html',
	styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
	@Input( 'menus' ) sidebarMenus: Menu[] 	=	[];
	@Output( 'navigate' ) navigate 	=	new EventEmitter<Menu>();

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
		this.navigate.emit( menu );
		// navigate to the menu path
		this.router.navigateByUrl( menu.href );
	}
	
}
