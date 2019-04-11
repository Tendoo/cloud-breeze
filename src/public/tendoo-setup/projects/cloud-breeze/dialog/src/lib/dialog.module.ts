import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDividerModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
	declarations: [DialogComponent],
	entryComponents: [DialogComponent],
	imports: [
		CommonModule,
		MatDividerModule,
		MatButtonModule,
		FlexModule
	],
	exports: [ DialogComponent ]
})
export class DialogModule { }
