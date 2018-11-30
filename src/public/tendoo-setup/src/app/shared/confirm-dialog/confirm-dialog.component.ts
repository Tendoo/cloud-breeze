import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Button } from '../../interfaces/button';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.css'],
	encapsulation: ViewEncapsulation.None,
	host: {
		style: 'flex-direction: column; box-sizing: border-box; display: flex; height: 100%;',      
	}
})
export class ConfirmDialogComponent implements OnInit {
	
	constructor(
		public dialog: MatDialogRef<ConfirmDialogComponent>,
		@Inject( MAT_DIALOG_DATA ) public data: ConfirmDialogObject,
		private snackBar: MatSnackBar
	) { }
	
	ngOnInit() {

	}

	/**
	 * Handle Press Events
	 * @param Button
	 * @return void
	 */
	handle( button: Button ) {
		if ( typeof button.onClick == 'function' ) {
			button.onClick();
		}
	}
	
}
