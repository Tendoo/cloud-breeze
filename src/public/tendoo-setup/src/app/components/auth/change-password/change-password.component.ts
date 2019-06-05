import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
	user: string;
	code: string;
	fields: Field[];
	changePasswordForm: FormGroup;
	
	constructor(
		private routeSnapshot: ActivatedRoute,
		public tendoo: TendooService,
		private snackbar: MatSnackBar,
		private router: Router
	) { }
	
	ngOnInit() {
		const routeWatcher 	=	this.routeSnapshot.paramMap.subscribe( param => {
			this.user 	=	param.get( 'user' );
			this.code 	=	param.get( 'code' );

			this.tendoo.fields.getPublicFields( 'auth.change-password' ).subscribe( (fields: Field[]) => {
				this.fields 				=	fields;
				const controls 				=	ValidationGenerator.buildFormControls( this.fields );
				this.changePasswordForm 	=	new FormGroup( controls );
			});
		});
	}

	/**
	 * Proceed Password Change
	 * by submitting a request to the server
	 * @param param void
	 * @return void
	 */
	proceedPasswordChange() {
		ValidationGenerator.touchAllFields( this.changePasswordForm );

		if ( ! this.changePasswordForm.valid ) {
			this.snackbar.open( 'Unable to proceed, the form is not valid.', 'OK', { duration: 3000 });
		}

		ValidationGenerator.deactivateFields( this.fields );

		/**
		 * submit the request to the 
		 * server to authenticate a token
		 * and a user provided
		 */
		console.log( this.changePasswordForm.value );
		const formData 	=	this.changePasswordForm.value;
		this.tendoo.auth.changePassword({
			user : this.user,
			authorization: this.code,
			...formData
		}).subscribe( result => {
			this.router.navigateByUrl( '/auth/login?notice=reset-successful' );
			this.snackbar.open( result.message, 'OK', { duration : 3000 });
		}, ( result: HttpErrorResponse ) => {
			ValidationGenerator.enableFields( this.fields );
			this.snackbar.open( result.error.message || 'An error has occured during the process.', 'OK' );
		})
	}	
}
