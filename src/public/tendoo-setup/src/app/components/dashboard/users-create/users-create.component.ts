import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
    
    fields: Field[]     =   [];

    constructor(
        public tendoo: TendooService
    ) { 
        forkJoin(
            this.tendoo.fields.getFields( 'dashboard.users.create' )
        ).subscribe( forkResult => {
            this.fields     =   <Field[]>forkResult[0];
        })
    }
    
    ngOnInit() {
    }
    
}
