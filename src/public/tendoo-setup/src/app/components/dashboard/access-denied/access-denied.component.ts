import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
    selector: 'app-access-denied',
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {
    
    constructor(
        private tendoo: TendooService
    ) { 
        this.tendoo.dashboardTitle( 'Access Denied' );
    }
    
    ngOnInit() {
    }
    
}
