import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDividerModule } from '@angular/material';

@NgModule({
	declarations: [DialogComponent],
	entryComponents: [DialogComponent],
	imports: [
		CommonModule,
		MatDividerModule,
		MatButtonModule
	],
	exports: [ DialogComponent ]
})
export class DialogModule { }
