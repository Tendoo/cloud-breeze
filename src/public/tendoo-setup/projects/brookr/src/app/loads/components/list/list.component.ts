import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@cloud-breeze/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TendooService } from '@cloud-breeze/services';
import { LoadAssignationComponent } from '../../../partials/dashboard/load-assignation/load-assignation.component';
import { LoadStatusComponent } from '../../../partials/dashboard/load-status/load-status.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  config: TableConfig;
  isLoading   = false;
  sort        = {};
  search      = {};
  page        = {};
  perPage     = {
    per_page : 10
  }
  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tendoo.crud.getConfig( 'brookr.loads', { ...this.page, ...this.search, ...this.sort, ...this.perPage }).subscribe( ( result: TableConfig ) => {
      this.config   = result;
    })
  }

  handleAction( event ) {
    if ( event.menu.type === 'DELETE' ) {
      this.tendoo.crud.delete( event.menu.url.replace( '{id}', event.row.id ) ).subscribe( result => {
        this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
        this.ngOnInit();
        this.dialog.getDialogById( event.menu.namespace ).close();
      }, ( result ) => {
        this.snackbar.open( result[ 'error' ].message || 'An unexpected error occured', 'OK', { duration: 5000 });
        this.dialog.getDialogById( event.menu.namespace ).close();
      });
    } else if ( event.menu.type === 'GOTO' ) {
      this.router.navigateByUrl( event.menu.url.replace( '{id}', event.row.id ) );
    } else if ( event.menu.type === 'OPEN' && event.menu.namespace === 'open.assign_driver' ) {
      this.openLoadAssignation( event.menu );
    } else if ( event.menu.type === 'OPEN' && event.menu.namespace === 'open.change_status' ) {
      this.openLoadChangeStatus( event.menu );
    }
  }

  openLoadChangeStatus( menu ) {
    console.log( menu );
    const dialog  = this.dialog.open( LoadStatusComponent, {
      id: 'load-status',
      data: menu,
      height: [ 
        this.tendoo.responsive.isSM(),
        this.tendoo.responsive.isXS(), 
      ].includes( true ) ? '80%' : '400px',
      width: [ 
        this.tendoo.responsive.isSM(),
        this.tendoo.responsive.isXS(), 
      ].includes( true ) ? '70%' : '500px',
    });

    dialog.afterClosed().subscribe( action => {
      this.ngOnInit();
      console.log( action );
    })
  }

  openLoadAssignation( menu ) {
    const dialog  = this.dialog.open( LoadAssignationComponent, {
      id: 'assign-load',
      data: menu,
      height: [ 
        this.tendoo.responsive.isSM(),
        this.tendoo.responsive.isXS(), 
      ].includes( true ) ? '80%' : '400px',
      width: [ 
        this.tendoo.responsive.isSM(),
        this.tendoo.responsive.isXS(), 
      ].includes( true ) ? '70%' : '500px',
    });

    dialog.afterClosed().subscribe( action => {
      this.ngOnInit();
      console.log( action );
    })
  }

  handleSort( event ) {
    this.sort   = event;
    this.ngOnInit();
  }

  handleSearch( event ) {
    this.search   = {
      search : event
    }
    this.ngOnInit();
  }

  handleSearchStatus( status ) {
    if ( status === false ) {
      this.search   = {},
      this.ngOnInit();
    }
  }

  handleRefresh( event ) {
    this.ngOnInit();
  }

  handlePagineNavigation( event ) {
    this.perPage  = { per_page : event.pageSize };
    this.page     = { page : event.pageIndex + 1};
    this.ngOnInit();
  }
}
