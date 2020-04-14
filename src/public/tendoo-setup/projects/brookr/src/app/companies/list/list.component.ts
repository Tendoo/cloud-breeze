import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TendooService } from '@cloud-breeze/services';
import { TableConfig } from '@cloud-breeze/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
    this.tendoo.crud.getConfig( 'brookr.companies', { ...this.sort, ...this.page, ...this.perPage, ...this.sort }).subscribe( (config: TableConfig) => {
      this.config   = config;
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message || result.message, 'TRY AGAIN' ).afterDismissed().subscribe( action => {
        if ( action.dismissedByAction ) {
          this.ngOnInit();
        }
      })
    })
  }

  handleRefresh( event ) {
    this.ngOnInit();
  }

  handleAction( event ) {
    switch( event.menu.type ) {
      case 'GOTO' : this.router.navigateByUrl( event.url );break;
    }
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

  handlePagineNavigation( event ) {
    this.perPage  = { per_page : event.pageSize };
    this.page     = { page : event.pageIndex + 1};
    this.ngOnInit();
  }

}
