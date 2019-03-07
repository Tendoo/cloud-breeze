import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
    
    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
    }
    
}
