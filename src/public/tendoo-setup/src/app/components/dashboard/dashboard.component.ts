import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    asideLink: Link[]   =   [];
    showDefaultAside    =   true;
    
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar,
        private mediaObserver: MediaObserver
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
        })
    }
    
    ngOnInit() {
        this.tendoo.menus.getMenus( 'dashboard.aside' ).subscribe( menus => {
            this.asideLink  =   menus;
        }, error => {
            this.snackbar.open( 'Unable to load the dashboard aside bar' );
        })
    }
    
}
