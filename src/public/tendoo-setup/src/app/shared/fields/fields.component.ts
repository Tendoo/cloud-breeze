import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../interfaces/field';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-fields',
	templateUrl: './fields.component.html',
	styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
	@Input( 'field' ) field: Field;
	@Input( 'group' ) group: FormGroup;
	constructor() { 
		
	}

	/**
	 * Check change state
	 */
	change() {
		// console.log( this.field.control );
	}
	
	ngOnInit() {
		if ( [ 'text', 'email', 'select', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button', 'switch' ].indexOf( this.field.type ) === -1 ) {
			throw( `Unable to render the field '${this.field.name}' with the field type : '${this.field.type}'. This type is not supported.`);
		}

		if ( ! ( this.group.get( this.field.name ) instanceof AbstractControl ) ) {
			throw `Unable to retreive the field "${this.field.name}" from the [group] provided to the "app-fields" component.`
		}

		this[ this.field.name ] 	=	this.field.control;
	}	
}
