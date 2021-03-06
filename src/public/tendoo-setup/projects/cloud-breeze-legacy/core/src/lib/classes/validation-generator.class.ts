import { ValidatorFn, Validators, FormControl, AbstractControl, FormGroup } from "@angular/forms";
import { Field } from "../interfaces/field";
import { MatchesValidator } from "../validators/matches.validator";
import { Numbervalidator } from "../validators/number.validator";
import { Form } from "../interfaces/form.interface";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";

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
            const matchRule         =   /(same):(\w+)/g;
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
     * Build FormControl from Field object.
     * Create FormControl if it's not defined and call 
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

        /**
         * each field should 
         * support a reset event while 
         * being built
         */
        field.reset     =   new EventEmitter<boolean>();
                
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

    /**
     * Disable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    static deactivateFields( fields: Field[] ) {
        fields.forEach( field =>  field.control.disable() );
    }

    /**
     * Enable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    static enableFields( fields: Field[] ) {
        fields.forEach( field => field.control.enable() );
    }

    /**
     * Throw custom errors on fields and FormGroup
     * @param array Field[]
     * @param error FieldError
     * @return void
     */
    static throwFieldsError( group: FormGroup, fields: Field[], errors ) {
        for( let error in errors ) {
            group.get( error ).setErrors({ error: true });
            fields.forEach( field => {
                if ( field.name === error ) {
                    field.errors    =   errors[ field.name ];
                }
            })
        }
    }

    /**
     * Get valid value from FromGroup.
     * This skip null value from the final object
     * @param object FormGroup value
     * @return object result
     */
    static noNullValue( group: FormGroup ) {
        let finalData   =   {};
        for( let key in group.value ) {
            if ( group.value[ key ] !== null ) {
                finalData[ key ]    =   group.value[ key ];
            }
        }

        return finalData;
    }

    /**
     * Create a form group for a specified Form interface.
     * use the availabel fields within the sections to generate it.
     * @param form Form configuration
     */
    static buildForm( form: Form ) {
        const groups    =   {};
        form.sections.forEach( section => {
            const form              =   ValidationGenerator.buildFormGroup( section.fields ).formGroup;
            section.formGroup       =   form;
            groups[ section.namespace ]  =   section.formGroup;
        });

        form.formGroup  =   new FormGroup( groups );
        
        return form;
    }

    /**
     * Trigger a touch even on a FormGroup object 
     * defined within a Form.
     * @param form Form object
     */
    static touchFormFields( form: Form ) {
        form.sections.forEach( section => ValidationGenerator.touchAllFields( section.formGroup ) );
    }

    /**
     * Deactivate all form/section fields.
     * @param form Form
     */
    static deactivateFormFiiels( form: Form ) {
        form.sections.forEach( s => ValidationGenerator.deactivateFields( s.fields ) );
    }

    /**
     * Enable Form Fields
     * @param form Form
     */
    static enableFormFields( form: Form ) {
        form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
    }
}