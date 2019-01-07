import { Component, OnInit } from '@angular/core';
import { TendooAuthService } from 'src/app/services/tendoo-auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    
    constructor(
        private auth: TendooAuthService,
        private route: Router
    ) { }
    
    ngOnInit() {
        this.auth.logout();
        this.route.navigateByUrl( '/auth/login' );
    }
    
}
