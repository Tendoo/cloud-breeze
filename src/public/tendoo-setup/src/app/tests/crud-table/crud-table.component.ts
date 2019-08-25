import { Component, OnInit, EventEmitter } from '@angular/core';
import { TableConfig } from '@cloud-breeze/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  crud: TableConfig   = {
    namespace: 'users',
    columns   :   {
      users: {
        label: 'Users',
        type: 'string'
      },
      email: {
        label: 'Email'
      }
    },
    labels: {
      list_title: 'Users',
      list_description: 'description',
      create_description: 'Create user',
      create_title: 'create',
      edit_description: 'Edit',
      edit_title: 'Foo'
    },
    fields: [
      {
        label: 'username',
        appearance: 'fill',
        name: 'username',
        type: 'text'
      }, {
        label: 'email',
        appearance: 'fill',
        name: 'email',
        type: 'text'
      }
    ],
    links: {

    },
    results: {
      data: [
        {
          users: 'John',
          email: 'john@email.com'
        }, {
          users: 'eazeer',
          email: 'eazeer@email.com'
        }
      ],
      current_page: 1,
      from:1,
      to: 1000,
      last_page: 100,
      per_page: 5,
      total: 1000,
      path: ''
    }
  }
  crudConfig  = new EventEmitter<TableConfig>();
  constructor() {
    this.crudConfig.emit();
  }

  ngOnInit() {
  }

}
