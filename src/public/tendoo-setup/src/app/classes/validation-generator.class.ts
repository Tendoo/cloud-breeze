import { ValidatorFn, Validators, FormControl, AbstractControl, FormGroup } from "@angular/forms";
import { Field } from "../interfaces/field";
import { MatchesValidator } from "../validators/matches.validator";
import { Numbervalidator } from "../validators/number.validator";

export class ValidationGenerator {
    /**
     * generate a validator from field validation property
     * @param string validation string;
     * @return array of validaiton
     */
    static from( validation: string | any[] ): ValidatorFn[] | null {

        
        if ( validation ) {

            /**
             * make sure to skip 
             * validation of object
             */
            if ( typeof validation !== 'string' ) {
                validation  =   (<any[]>validation).filter( rule => {
                    return typeof rule === 'string'; 
                });
                validation  =   (<any[]>validation).join( '|' );
            }

            let finalRules          =   [];
            const rules             =   (<string>validation).split( '|' );
            const minRule 			=	/(min)\:([0-9])+/g;
            const maxRule 			=	/(max)\:([0-9])+/g;
            const matchRule         =   /(matches):(\w+)/g;
            let result;
            
            /**
             * Loop and parses the rules
             */
            rules.forEach( rule => {
                if ( rule == 'required' ) {
                    finalRules.push( Validators.required );
                } else if ( rule == 'email' ) {
                    finalRules.push( Validators.email );
                } else if( result =   minRule.exec( rule ) ) {
                    finalRules.push( Validators.minLength( result[2] ) );
                } else if( result = maxRule.exec( rule ) ) {
                    finalRules.push( Validators.maxLength( result[2] ) );
                } else if( result = matchRule.exec( rule ) ) {
                    finalRules.push( MatchesValidator( result[2] ) )
                } else if ( rule == 'number' ) {
                    finalRules.push( Numbervalidator() )
                }
            });

            return finalRules;
        }
        return null;
    }

    /**
     * Extract FormControl from Field object
     * @param array fields
     * @return object of FormControl
     */
    static extractControls( fields:Field[], ignoreEmpty = false ): { [key:string] : FormControl } {
        let formControl     =   {};
        fields.forEach( field => {

            /**
             * the field.control is required in order to extract a control
             * unless if that should ignore empty controls
             */
            if ( field.control === undefined && ignoreEmpty == false ) {
                throw `Unable to use the validation control for the field : "${field.name}". Please make sure to define the '.control' property for this field.`
            }

            if ( field.control ) {
                field.control.setValidators( this.from( field.validation ) );
                formControl[ field.name ]   =   field.control;
            }
        });

        return formControl;
    }

    /**
     * Build FormControl from Field object
     * create FormControl if it's not defined and call 
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    static buildFormControls( fields: Field[] ): { [ key:string ] : FormControl } {
        let formControls     =   {};
        fields.forEach( ( field:Field ) => {
            if ( field.control == undefined ) {
                field.control   =   new FormControl( field.value ? field.value : null );
            } else {
                field.control.setValue( field.value );
            }
        });
        
        return this.extractControls( fields );
    }

    /**
     * Build FormControl from Field object
     * create FormControl if it's not defined and call 
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    static buildFormControl( field: Field ): FormControl {
        if ( field.control == undefined ) {
            field.control   =   new FormControl( field.value || null );
        } else {
            field.control.setValue( field.value || null );
        }
        
        return this.extractControls([ field ])[ field.name ];
    }

    /**
     * touch all fields of a provided FormGroup
     * @param form 
     */
    static touchAllFields( form:FormGroup ) {
        /**
		 * Trigger touch even on all fields.
		 * Start by looping tabs
		 */
		Object.keys( form.controls ).forEach( field => {
            form.get( field ).markAsTouched();
        });
    }

    /**
     * Build From Field Array
     * @param array Field[]
     * @return FormGroup
     */
    static buildFormGroup( fields: Field[] ): { fields: Field[], formGroup: FormGroup } {
        fields.forEach( field => {
            field.control = ValidationGenerator.buildFormControl( field )
        });

        return {
            fields,
            formGroup   :   new FormGroup( ValidationGenerator.extractControls( fields ) )
        };
    }
}