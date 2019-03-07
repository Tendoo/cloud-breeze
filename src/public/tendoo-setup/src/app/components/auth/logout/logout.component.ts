import { Component, OnInit } from '@angular/core';
import { TendooAuthService } from 'src/app/services/tendoo-auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    
    constructor(
        private auth: TendooAuthService,
        private route: Router,
        private cookie: CookieService,
        public tendoo: TendooService,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        this.tendoo.setTitle( 'Logging out...' );
        this.auth.logout().subscribe( result => {
            this.cookie.delete( 'auth.user' );
            this.route.navigateByUrl( '/auth/login' );
        }, error => {
            this.snackbar.open( 'An error occured while logging out.', 'TRY AGAIN' )
                .afterDismissed()
                .subscribe( result => {
                    if ( result.dismissedByAction ) {
                        this.ngOnInit();
                    }
                })
        });
    }
    
}
