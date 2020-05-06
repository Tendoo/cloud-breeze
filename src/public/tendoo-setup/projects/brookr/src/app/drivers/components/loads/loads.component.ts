import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, Dialog } from '@cloud-breeze/core';
import { DriverLoadStatus } from '../../../partials/dashboard/driver-load-status/driver-load-status.component';
import { ConfirmDialogObject } from 'projects/cloud-breeze/core/src/lib/interfaces/confirm-dialog';
import { PopupComponent } from '../../../partials/dashboard/popup/popup.component';

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
    if ( action.menu.namespace === 'handle' ) {
      this.tendoo.get( `${this.tendoo.baseUrl}brookr/drivers/is-available` ).subscribe( response => {
        this.dialog.open( DriverLoadStatus, {
          id: 'load-handle',
          data: {
            load: action[ 'row' ]
          },
          width: this.tendoo.responsive.isXL() || this.tendoo.responsive.isLG() || this.tendoo.responsive.isMD() ? '600px' : '80%',
          height: this.tendoo.responsive.isXL() || this.tendoo.responsive.isLG() || this.tendoo.responsive.isMD() ? '400px' : '80%',
        })
      }, ( result: HttpErrorResponse ) => {
        this.snackbar.open( result[ 'error' ].message || result.message, 'OK', { duration: 6000 });
      })
    } else if ( action.menu.namespace === 'brookr.start-delivery' ) {
      this.dialog.open( DialogComponent, {
        id: 'start-delivery',
        data: <ConfirmDialogObject>{
          title: 'Start Delivery',
          message: 'Would you like to start delivery now ?',
          buttons: [
            {
              namespace: 'yes',
              label: 'Yes',
              onClick: () => {
                this.dialog.getDialogById( 'start-delivery' ).close();
                this.tendoo.get( `${this.tendoo.baseUrl}brookr/loads/start/{id}`.replace( '{id}', action.row.id) ).subscribe( result => {
                  this.setTabActive( this.active );
                  this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
                })
              }
            }, {
              namespace: 'no',
              label: 'No',
              onClick: () => {
                this.dialog.getDialogById( 'start-delivery' ).close();
              }
            }
          ]
        }
      })
    } else if ( action.menu.namespace === 'brookr.send-delivery-document' ) {
      this.dialog.open( PopupComponent, {
        id: 'brookr.send-delivery-document',
        data: {},
        width: [
          this.tendoo.responsive.isLG(),
          this.tendoo.responsive.isMD(),
          this.tendoo.responsive.isXL(),
        ].includes( true ) ? '600px' : '80%',
        height: [
          this.tendoo.responsive.isLG(),
          this.tendoo.responsive.isMD(),
          this.tendoo.responsive.isXL(),
        ].includes( true ) ? '600px' : '80%'
      })
    }
  }
}
