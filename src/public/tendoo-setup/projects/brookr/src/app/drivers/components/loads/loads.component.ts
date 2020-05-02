import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, Dialog } from '@cloud-breeze/core';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.scss']
})
export class LoadsComponent implements OnInit {
  config: BrookrTableConfig;

  sections  =   [
    {
      title: 'Assigned Loads',
      namespace: 'assigned.loads',
      description: 'Loads assigned to your account.',
      active: false,
      crud: this.tendoo.crud.getConfig( 'brookr.drivers-loads.assigned' )
    }, {
      title: 'Unassigned Loads',
      namespace: 'unassigned.loads',
      description: 'Pending Loads not assigned to a driver.',
      active: false,
      crud: this.tendoo.crud.getConfig( 'brookr.drivers-loads.unassigned' )
    }
  ]

  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setTabActive( this.sections[0] );
  }

  setTabActive( tab ) {
    this.sections.forEach( s => s.active = false );
    tab.active  = true;
    this.loadActiveTabConfiguration();
  }

  loadActiveTabConfiguration() {
    this.active.crud.subscribe( (config: BrookrTableConfig ) => {
      this.config   = config;
    }, ( result: HttpErrorResponse ) => {
      this.config   = undefined;
      this.snackbar.open( result[ 'error' ].message || result.error, 'OK', { duration: 3000 });
    })
  }

  get active() {
    return this.sections.filter( s => s.active )[0];
  }

  handleAction( action ) {
    console.log( action );
    if ( action.namespace === 'handle' ) {
      this.tendoo.get( `${this.tendoo.baseUrl}api/brookr/drivers/is-available` ).subscribe( action => {
        this.dialog.open( DialogComponent, {
          id: 'load-handle',
          data: <Dialog>{
            title: 'Handle Load for Delivery',
            message: `Would you like to assign yourself to delivery this unassigned load ?`,
            buttons: [
              {
                namespace: 'yes',
                onClick: () => {
                  console.log( action );
                  this.tendoo.get( `${this.tendoo.baseUrl}api/brookr/drivers/self-assign/{id}`.replace( '{id}', action[ 'row' ].id )).subscribe( result => {
                    this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
                  }, ( result: HttpErrorResponse ) => {
                    this.snackbar.open( result[ 'error' ].message || result.message, 'OK', { duration: 5000 });
                  })
                },
                label: 'Yes',
              }, {
                namespace: 'cancel',
                label: 'No',
                onClick: () => {
                  this.dialog.getDialogById( 'load-handle' ).close();
                }
              }
            ]
          }
        })
      }, ( result: HttpErrorResponse ) => {
        this.snackbar.open( result[ 'error' ].message || result.message, 'OK', { duration: 6000 });
      })
    }
  }
}
