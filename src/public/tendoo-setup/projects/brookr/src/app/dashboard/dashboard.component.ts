import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@cloud-breeze/core';
import { TendooService } from '@cloud-breeze/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableCrud:TableConfig   = {
    columns: {
      load : {
        label: 'Load',
      },
      status: {
        label: 'Status'
      },
      driver: {
        label: 'Driver'
      }
    },
    labels: {
      list_title: 'Ongoing Loads',
      list_description: 'display all ongoing loads',
      create_title: 'Create Load',
      create_description: 'Will create new load',
      edit_title: 'Edit an existing load',
      edit_description: 'Load will be edited'
    },
    namespace: 'brookr.loads',
    fields: [],
    links: {},
  }

  constructor(
    private tendoo: TendooService
  ) { }

  ngOnInit(): void {
    this.tendoo.crud.get( '/brookr/loads' ).subscribe( result => {
      console.log( result );
    })
  }
}
