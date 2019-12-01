import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Field, ValidationGenerator } from '@cloud-breeze/core';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
	user: string;
	code: string;
	fields: Field[];
	recaptcha: Field;
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
				const recaptcha 			=	this.fields.filter( field => field.type === 'recaptcha' );
				
				if ( recaptcha.length > 0 ) {
					this.recaptcha 	=	recaptcha[0];
					this.recaptcha.reset 	=	new EventEmitter<boolean>();
				}
				
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

			if ( this.recaptcha ) {
                this.recaptcha.reset.emit(true);
            }

			this.snackbar.open( result.error.message || 'An error has occured during the process.', 'OK' );
		})
	}	
}
