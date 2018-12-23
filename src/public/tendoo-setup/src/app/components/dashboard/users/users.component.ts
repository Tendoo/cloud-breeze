import { Component, OnInit } from '@angular/core';
import { TendooUsersService } from 'src/app/services/tendoo-users.service';
import { TendooService } from 'src/app/services/tendoo.service';
import { Observable, forkJoin } from 'rxjs';
import { TableColumnInterface } from 'src/app/interfaces/table-column.interface';
import { TableEntryInterface } from 'src/app/interfaces/table-entry.interface';

export interface PeriodicElement {
    id: number;
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    columns: string[]                       =   [];
    rawColumns: TableColumnInterface        =   {};
    source:TableEntryInterface[]            =   [];

    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        forkJoin(
            this.tendoo.users.getUsers(),
            this.tendoo.tables.getColumns( 'dashboard.users' )
        )
        .subscribe( ( response ) => {
            this.rawColumns     =   <TableColumnInterface>response[1];
            this.columns        =   Object.keys( this.rawColumns );
            this.source         =   <TableEntryInterface[]>response[0];
        })
    }

    sortData( event ) {
        console.log( event );
    }
    
}
