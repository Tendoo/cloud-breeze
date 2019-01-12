import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    asideLink: Link[]   =   [];
    
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        this.tendoo.menus.getMenus( 'dashboard.aside' ).subscribe( menus => {
            this.asideLink  =   menus;
        }, error => {
            this.snackbar.open( 'Unable to load the dashboard aside bar' );
        })
    }
    
}
