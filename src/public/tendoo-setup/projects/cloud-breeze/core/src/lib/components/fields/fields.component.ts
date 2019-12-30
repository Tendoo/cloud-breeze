import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Field } from '../../interfaces/field';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'cb-field',
	templateUrl: './fields.component.html',
	styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
	@Input( 'field' ) field: Field;
	@Input( 'group' ) group: FormGroup;
	@ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
	
	imageChangedEvent: 	any = '';
	avatarBase64: 		any = '';
	
	constructor(
		private snackbar: MatSnackBar
	) {}
	
	ngOnInit() {
		if ( [ 'text', 'email', 'select', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button', 'switch', 'recaptcha', 'image' ].indexOf( this.field.type ) === -1 ) {
			throw( `Unable to render the field '${this.field.name}' with the field type : '${this.field.type}'. This type is not supported.`);
		}

		if ( ! ( this.group.get( this.field.name ) instanceof AbstractControl ) ) {
			throw `Unable to retreive the field "${this.field.name}" from the [group] provided to the "app-fields" component.`
		}

		/**
		 * listen to reset on
		 * the field reset method
		 * 
		 */
		if ( this.field.reset !== undefined ) {
			this.field.reset.subscribe( value => {
				if ( this.field.type === 'recaptcha' ) {
					this.captchaElem.resetCaptcha();
				} else {
					this.field.control.setValue('');
				}
			})
		}

		this[ this.field.name ] 	=	this.field.control;
	}	
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
	}
	
    imageCropped(event: ImageCroppedEvent) {
		this.field.control.setValue( event.base64 );
		this.avatarBase64 	=	event.base64;
	}
	
	loadImageFailed() {
		this.snackbar.open( 'An error occured while loading the image', 'OK', { duration: 3000 });
	}
}
