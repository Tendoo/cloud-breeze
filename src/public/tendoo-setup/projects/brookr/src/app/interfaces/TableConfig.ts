import { TableConfig } from '@cloud-breeze/core';

export interface BrookrTableConfig extends TableConfig {
  title?: string;
  columns?: {
    [key:string] : {
      label: string;
      isSorting: boolean;
      sortDirection: string;
    }
  }
}
