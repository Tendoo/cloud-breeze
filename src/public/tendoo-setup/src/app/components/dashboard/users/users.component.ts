import { Component, OnInit } from '@angular/core';
import { TendooUsersService } from 'src/app/services/tendoo-users.service';
import { TendooService } from 'src/app/services/tendoo.service';
import { Observable, forkJoin } from 'rxjs';

export interface PeriodicElement {
    id: number;
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {id: 1, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {id: 1, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 1, position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {id: 1, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {id: 1, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {id: 1, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {id: 1, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {id: 1, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = [];
    dataSource = ELEMENT_DATA;
    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        forkJoin(
            this.tendoo.users.getUsers(),
            this.tendoo.tables.getColumns( 'dashboard.users' )
        )
        .subscribe( ( response ) => {
            console.log( response );
        })
    }

    sortData( event ) {
        console.log( event );
    }
    
}
