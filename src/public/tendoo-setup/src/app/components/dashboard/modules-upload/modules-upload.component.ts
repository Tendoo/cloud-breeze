import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogObject } from 'src/app/interfaces/confirm-dialog';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { TendooService } from 'src/app/services/tendoo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncResponse } from 'src/app/interfaces/async-response';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modules-upload',
    templateUrl: './modules-upload.component.html',
    styleUrls: ['./modules-upload.component.css']
})
export class ModulesUploadComponent implements OnInit {
    file: FileList;
    constructor(
        private dialog: MatDialog,
        private responsive: ResponsiveService,
        private snackbar: MatSnackBar,
        public tendoo: TendooService,
        private router: Router,
    ) { }
    
    ngOnInit() {
        this.tendoo.dashboardTitle( 'Upload a module' );
    }

    handleFileInput( file ) {
        this.file   =   file;
    }

    /**
     * Trigger when the user want's to upload 
     * a module
     * @return void
     */
    upload() {
        if ( this.file === undefined || this.file.length === 0 ) {
            return this.snackbar.open( 'You need to select a file before uploading.', null, {
                duration: 3000
            });
        }

        this.dialog.open( ConfirmDialogComponent, {
            id      :   'upload.module',
            data 	:	<ConfirmDialogObject>{
                title 		    :	'Would you like to confirm ?',
				message 	:	'Would you like to upload this module.',
				buttons 	:	[{
					label 	:	'Ok',
					onClick 	: () => {
						this.dialog
							.getDialogById( 'upload.module' )
                            .close();    

                        this.handleUpload();
					}
				},{
					label 	:	'Cancel',
					color 	:	'warn',
					onClick 	: () => {
						this.dialog
							.getDialogById( 'upload.module' )
							.close();
					}
				}]
            }, 
            height 	:	this.responsive.define({
				lg 	: 	'60%',
				xl  : 	'60%',
				md 	: 	'70%',
				sm 	:	'70%',
				xs 	:	'70%'
			}),
			width 	:	this.responsive.define({
				lg 	: 	'60%',
				xl  : 	'60%',
				md 	: 	'70%',
				sm 	:	'70%',
				xs 	:	'70%'
			}),
        });
    }
    
    /**
     * Handled uploaded file
     * @return void
     */
    handleUpload() {
        this.tendoo.modules.uploadFile( this.file.item(0) ).subscribe( (result:AsyncResponse) => {
            /**
             * check if a module require a migration
             */
            if ( result.action === 'check-migration' ) {

            }

            this.snackbar.open( result.message, null, {
                duration: 3000
            });

            this.router.navigateByUrl( 'dashboard/modules' );

        }, ( result: HttpErrorResponse ) => {
            /**
             * An erru ash occured, let's
             * display what happened
             */
            this.snackbar.open( result.error.message, null, {
                duration: 5000
            });
        });
    }
}
