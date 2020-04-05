import { Component, OnInit } from '@angular/core';
import { TendooAuthService } from 'src/app/services/tendoo-auth.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-activate-account',
    templateUrl: './activate-account.component.html',
    styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
    
    constructor(
        private auth: TendooAuthService,
        private route: Router,
        private routeSnapshot: ActivatedRoute,
        private cookie: CookieService,
        public tendoo: TendooService,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        this.routeSnapshot.queryParamMap.subscribe( query => {
            this.tendoo.auth.sendActivationCode(
                query.get( 'code' ),
                query.get( 'user_id' )
            ).subscribe( result => {
                this.route.navigateByUrl( '/auth/login?notice=account-activated' );
            }, error => {
                this.route.navigateByUrl( '/auth/login?notice=activation-failed' );
                this.snackbar.open( `An error has occured : ${error.message}`, 'OK' );  
            });
        })
    }
    
}
