import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { DialogComponent } from '@cloud-breeze/core';

export interface PeriodicElement {
    name: string;
    url: string;
    permissions: number;
    actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {url: 'http://url.com', name: 'Hydrogen', permissions: 1.0079, actions: 'H'},
    {url: 'http://url.com', name: 'Helium', permissions: 4.0026, actions: 'He'},
    {url: 'http://url.com', name: 'Lithium', permissions: 6.941, actions: 'Li'},
    {url: 'http://url.com', name: 'Beryllium', permissions: 9.0122, actions: 'Be'},
    {url: 'http://url.com', name: 'Boron', permissions: 10.811, actions: 'B'},
    {url: 'http://url.com', name: 'Carbon', permissions: 12.0107, actions: 'C'},
    {url: 'http://url.com', name: 'Nitrogen', permissions: 14.0067, actions: 'N'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Oxygen', permissions: 15.9994, actions: 'O'},
    {url: 'http://url.com', name: 'Fluorine', permissions: 18.9984, actions: 'F'},
    {url: 'http://url.com', name: 'Neon', permissions: 20.1797, actions: 'Ne'},
];



@Component({
    selector: 'app-profile-apps',
    templateUrl: './profile-apps.component.html',
    styleUrls: ['./profile-apps.component.css']
})
export class ProfileAppsComponent implements OnInit {
    displayedColumns: string[]  =   ['app_name', 'domain', 'expires_at', 'scopes', 'actions' ];
    dataSource                  =   [];
    constructor(
        public tendoo: TendooService,
        public dialog: MatDialog,
        private snackbar: MatSnackBar
    ) { }
    
    ngOnInit() {
        this.tendoo.dashboardTitle( 'Authenticated Applications' );
        this.tendoo.oauth.getAuthorizedApplication().subscribe( (applications: any[]) => {
            this.dataSource     =   applications;
        })
    }
    
    revoke( app ) {
        this.dialog.open( DialogComponent, {
            id: 'confirm-dialog',
            data: <ConfirmDialogObject>{
                title: `Confirm Your Action`,
                message: `Would you like to revoke this application ?`,
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            this.tendoo.oauth.revoqueApp( app.id ).subscribe( (result: AsyncResponse) => {
                                this.snackbar.open( result.message, 'OK', { duration: 3000 });
                                this.dialog.getDialogById( 'confirm-dialog' ).close();
                            }, error => {
                                this.snackbar.open( 'Unable to find the application access on the server', 'OK', { duration: 4000 });
                                this.dialog.getDialogById( 'confirm-dialog' ).close();
                            })
                        }
                    }, {
                        label: 'No', 
                        onClick: () => {
                            this.dialog.getDialogById( 'confirm-dialog' ).close();
                        }
                    }
                ]
            }
        }).afterClosed().subscribe( closing => {
            this.ngOnInit();
        })
    }
}
