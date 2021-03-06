import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '../../interfaces/dialog';
import { Button } from '../../interfaces/button';

@Component({
	selector: 'cb-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css'],
	encapsulation: ViewEncapsulation.None,
	host: {
		style: 'flex-direction: column; box-sizing: border-box; display: flex; height: 100%;',      
	}
})
export class DialogComponent implements OnInit {
	
	constructor(
		public dialog: MatDialogRef<DialogComponent>,
		@Inject( MAT_DIALOG_DATA ) public data: Dialog,
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
