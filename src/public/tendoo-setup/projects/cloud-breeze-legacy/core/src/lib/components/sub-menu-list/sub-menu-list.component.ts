import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/menu';

@Component({
	selector: 'cb-submenu',
	templateUrl: './sub-menu-list.component.html',
	styleUrls: ['./sub-menu-list.component.css']
})
export class SubMenuListComponent implements OnInit {
	@Input( 'childrens' ) subMenus: Menu[];
	@Output( 'navigate' ) navigate  	=	new EventEmitter<Menu>();
	constructor(
		private router: Router,
	) { 
	}
	
	ngOnInit() {
	}

	/**
	 * GoTo
	 * @return void
	 */
	goTo( menu:Menu ) {
		this.navigate.emit( menu );
		this.router.navigateByUrl( menu.href );
	}
}
