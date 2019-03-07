import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
    selector: 'app-setup-home',
    templateUrl: './setup-home.component.html',
    styleUrls: ['./setup-home.component.css']
})
export class SetupHomeComponent implements OnInit {
    
    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
    }
    
}
