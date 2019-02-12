import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { TendooService } from 'src/app/services/tendoo.service';
import { TendooModule } from 'src/app/interfaces/module.interface';
import { AsyncResponse } from 'src/app/interfaces/async-response';

@Component({
	selector: 'app-migration-dialog',
	templateUrl: './migration-dialog.component.html',
	styleUrls: ['./migration-dialog.component.css']
})
export class MigrationDialogComponent implements OnInit {
	
	currentVersion: string[];
	version: string;
	file: string;

	constructor(
		private dialog: MatDialog,
		public tendoo: TendooService,
		private snackbar: MatSnackBar
		@Inject( MAT_DIALOG_DATA ) public data,
	) { 
		console.log( this.data );
	}
	
	async ngOnInit() {
		const response 	=	await this.runVersionMigration();
		this.snackbar.open( response.message, null, { duration: 3000 });
		this.dialog.getDialogById( 'migration-dialog' ).close( response );
	}

	async runVersionMigration() {
		const { migrations, module } 	=	this.data;
		for( let version in migrations ) {
			this.version 	=	version;
			const response 	=	await <Promise<AsyncResponse>>this.runMigration( migrations[ version ], module, version );
			if ( response.status === 'failed' ) {
				return response;
			}
		}

		return {
			status:	'success',
			message: 'the migration has run successfully'
		};
	}

	/**
	 * Run a specific version migration files
	 * @param files files path
	 * @param module module object
	 */
	async runMigration( files: string[], module: TendooModule, version ) {
		return new Promise( async ( resolve, reject ) => {

			for( let i = 0; i < files.length; i++ ) {
				
				const parts 		=	files[i].split( '/' );
				this.file 			=	parts[ parts.length -  1 ];
				const response 		=	await <Promise<AsyncResponse>>this.tendoo.modules.runMigration( module.namespace, files[i], version )

				if ( response.status === 'failed' ) {
					reject( response );
				}

			}

			resolve({
				status: 'success',
				message: 'The migration of the version #s has been successful'
			});	
		})
	}	
}
