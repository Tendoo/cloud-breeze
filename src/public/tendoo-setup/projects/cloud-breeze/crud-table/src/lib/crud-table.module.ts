import { NgModule } from '@angular/core';
import { CrudTableComponent } from './components/crud-table.component';
import { MatCardModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatCheckboxModule, MatDividerModule, MatSortModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TruncateMiddlePipe } from './pipes/truncate-middle.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ CrudTableComponent, TruncateMiddlePipe, TruncatePipe ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MatCardModule,
		MatTableModule,
		MatSortModule,
		MatMenuModule,
		MatIconModule,
		MatProgressBarModule,
		MatCheckboxModule,
		MatDividerModule,
		MatButtonModule
	],
	exports: [ CrudTableComponent ]
})
export class CrudTableModule { }
