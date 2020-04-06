import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  sortNow = '';
  searchField   = '';
  
  @Output( 'sort' ) sort = new EventEmitter;
  @Output( 'search' ) search = new EventEmitter;
  @Input( 'config' ) config: BrookrTableConfig;

  searchEnabled   = false;

  constructor() {}

  proceedSearch() {
    this.search.emit( this.searchField );
  }

  get columnsKeys() {
    console.log( this.config );
    const keys  = Object.keys( this.config.columns );
    return keys;
  }

  sortThis( column ) {
    if ( ! column.value.sortable ) {
      return false;
    }

    if ( ! column.value.isSorting ) {
      for( let key in this.config.columns ) {
        this.config.columns[ key ].isSorting      = false;
        this.config.columns[ key ].sortDirection  = '';
      }
      column.value.isSorting        = true;
    }

    column.value.sortDirection  = column.value.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sort.emit( column );
  }
  ngOnInit(): void {
  }
}
