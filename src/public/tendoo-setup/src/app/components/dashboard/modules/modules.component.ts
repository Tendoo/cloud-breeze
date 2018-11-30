import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
    modules: any[]      =   [];
    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        this.loadModules();
    }
    
    loadModules() {
        this.tendoo.modules.getAll().subscribe( (modules:any[]) => {
            this.modules    =   Object.values( modules );
        })
    }
}
