import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TableConfig } from '@cloud-breeze/core';

interface Row {
  columns: {
    value: string;
    checked: boolean;
    checkbox: boolean;
    menus: {
      label: string;
      onClick: ( event? ) => void
    }[];
    column: string;
    props?: {
      className: string;
    };
  }[];
  row?: {
    [key:string]: any;
  }
  props?: {
    className: string;
  };
}

interface TableConfigExtended extends TableConfig {
  columns: {
    [key:string] : {
      label: string;
      direction: null | string;
      props?: {
        style?: {
          [key:string]: any
        }
      }
    }
  }
}

interface PageSize {
  label: string;
  selected?: boolean;
  size: number;
}

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  rows: TableConfigExtended[ 'results' ][ 'data' ];
  // columns   = [];
  @Input( 'bulk' ) bulk;
  searchOn  = false;

  @Input( 'config' ) 
  set config( config: TableConfigExtended ) {
    this._config        = config;
    this.columns        = this._config.columns;
    this.columnsNames   = Object.keys( this.columns );
    this.totalPages     = this._config.results.last_page;
    this.currentPage    = this._config.results.current_page;
    this.rows           = this._config.results.data;
  };

  get config() {
    return this._config;
  }

  private _config: TableConfigExtended;
  
  totalPages:number   = 200;
  currentPage:number  = 1;

  @Input( 'pageSizes' ) pageSizes: PageSize[]   = [
    {
      label: '10',
      size: 10
    }, {
      label: '30',
      size: 30
    }, {
      label: '50',
      size: 50
    }, {
      label: '100',
      size: 100
    }
  ];

  columns: TableConfigExtended[ 'columns' ];

  @Output( 'sort' ) sort                  = new EventEmitter;
  @Output( 'navigate' ) navigate          = new EventEmitter;
  @Output( 'action' ) action              = new EventEmitter();
  @Output( 'search' ) search              = new EventEmitter<string>();
  @Output( 'search-status' ) searchStatus = new EventEmitter();
  @Output( 'pageSize' ) pageSize          = new EventEmitter();
  @Output( 'refresh' ) refresh            = new EventEmitter();

  columnsNames: string[];

  constructor() {
    this.bulk   =   this.bulk || [];
  }

  ngOnInit() {
    
  }

  get selected() {
    return this.rows.filter( entry => entry.$props[ 'checked' ]);
  }

  get defaultSize() {
    const selected  = this.pageSizes.filter( s => s.selected );
    if ( selected.length > 0 ) {
      return selected[0].size;
    } else {
      this.pageSizes[0].selected = true;
      return this.pageSizes[0].size;
    }
  }

  navigateTo( page ) {
    if ( page !== '...' ) {
      this.currentPage  = page;
      this.navigate.emit( page );
    }
  }

  toggleOrderColumn( columnName, column ) {
    if ( columnName === '$actions' ) {
      return false;
    }

    for( let columnKey in this.columns ) {
      if ( columnKey !== '$actions' ) {
        if ( columnKey !== columnName ) {
          this.columns[ columnKey ].direction  = null;
        } else {
          if( [ null, undefined ].includes( this.columns[ columnKey ].direction ) ) {
            this.columns[ columnKey ].direction = 'desc';
          } else if( this.columns[ columnKey ].direction === 'desc' ) {
            this.columns[ columnKey ].direction = 'asc';
          } else if ( this.columns[ columnKey ].direction === 'asc' ) {
            this.columns[ columnKey ].direction = null;
          }
        }        
      }
    }

    const sort  = {
      direction: this.columns[ columnName ].direction !== null ? this.columns[ columnName ].direction : '',
      active: this.columns[ columnName ].direction !== null ? columnName : ''
    };

    this.sort.emit( sort );

    console.log( sort );

  }

  changeStatus( checkbox: MatCheckboxChange ) {
    this.rows.forEach( entry => {
      entry.$props[ 'checked' ]  = checkbox.checked;
    })
  }

  emitRefresh() {
    this.refresh.emit(true);
  }

  setPerPage( menu:PageSize ) {
    this.pageSizes.forEach( s => s.selected = false );
    menu.selected   = true;
    this.pageSize.emit( menu.size );
  }

  emitSearch( field: HTMLInputElement ) {
    this.search.emit( field.value );
  }

  singleActionClick( row, menu ) {
    if ( menu.onClick !== undefined ) {
      menu.onClick( row );
    }
    this.action.emit({ menu, row });
  }

  pagination(currentPage, totalPage) {
    var current = currentPage,
        last = totalPage,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
  }
}
