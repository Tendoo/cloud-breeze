import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';
import { Menu } from 'src/app/interfaces/menu';
import { Router } from '@angular/router';
import { CoreEvent } from 'src/app/classes/core-event.class';
import { CoreAction } from 'src/app/interfaces/core-action';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    asideMenus: Menu[]   =   [];
    showDefaultAside    =   true;
    
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar,
        private mediaObserver: MediaObserver,
        private router: Router,
        private coreEvent: CoreEvent
    ) { 
        this.mediaObserver.media$.subscribe( media => {
            switch( media.mqAlias ) {
                case 'xs':
                case 'sm':
                    this.showDefaultAside   =   false;
                break;
                default:
                    this.showDefaultAside   =   true;
                break;
            }
        });

        this.coreEvent.subscribe( (event: CoreAction) => {
            if ( [ 'module.enabled', 'module.deleted', 'module.disabled' ].includes( event.type ) ) {
                this.ngOnInit();
            }
        })
    }
    
    ngOnInit() {
        this.tendoo.menus.getMenus( 'dashboard.aside' ).subscribe( menus => {
            this.asideMenus  =   menus;
        }, error => {
            this.snackbar.open( 'Unable to load the dashboard aside bar' );
        })
    }

    /**
	 * Open/close current menu
	 * @param object menu
	 * @todo probably a bad pratice
	 */
	toggle( index:number ) {
		this.asideMenus.forEach( ( menu, __index ) => {
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
		this.asideMenus.forEach( menu => {
			menu.open 	=	false;
		});
	}

	/**
	 * GoTo
	 * @return void
	 */
	goTo( menu:Link ) {
		// navigate to the menu path
		this.router.navigateByUrl( <string>menu.href );
	}
    
}
