import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
	selector: 'app-migration-dialog',
	templateUrl: './migration-dialog.component.html',
	styleUrls: ['./migration-dialog.component.css']
})
export class MigrationDialogComponent implements OnInit {
	
	constructor(
		private dialog: MatDialog,
		public tendoo: TendooService,
		@Inject( MAT_DIALOG_DATA ) public data,
	) { 
		console.log( this.data );
	}
	
	ngOnInit() {
	}
	
}
