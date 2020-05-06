import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TendooService } from '@cloud-breeze/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  entries = [];
  isLoading = false;
  sort = {};
  search = {};
  perPage= {
    per_page: 10
  };
  page = {};
  config: BrookrTableConfig;
  searchEnabled   = false;

  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {
    
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

  ngOnInit(): void {
    this.isLoading  = true;
    this.tendoo.crud.getConfig( 'brookr.trucks', { ...this.sort, ...this.search, ...this.page, ...this.perPage }).subscribe( ( crud: BrookrTableConfig ) => {
      this.isLoading      =   false;
      this.config         =   crud;
      this.config.title   =   'Trucks List';
    }, ( result ) => {
      this.snackbar.open( 'An error has occured while loading the entries.', 'OK', { duration: 5000 });
    });
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

  handleDelete( event ) {
    
  }

}
