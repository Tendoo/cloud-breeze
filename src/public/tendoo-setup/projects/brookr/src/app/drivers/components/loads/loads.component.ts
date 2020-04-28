import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackbar: MatSnackBar
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
}
