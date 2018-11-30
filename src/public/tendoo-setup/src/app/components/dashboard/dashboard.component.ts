import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    asideLink: Link[]   =   [];
    
    constructor() { 
        this.asideLink      =   [
            {
                label: 'Dashboard',
                namespace: 'dashboard',
                href: '/dashboard',                
            }, {
                label: 'Users',
                namespace: 'users',
                href: '/dashboard/users',                
            }, {
                label: 'Modules',
                namespace: 'users',
                href: '/dashboard/modules',                
            }
        ]
    }
    
    ngOnInit() {
    }
    
}
