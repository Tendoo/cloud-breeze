import { ValidatorFn, AbstractControl } from "@angular/forms";

export function Numbervalidator(): ValidatorFn {
    return ( control: AbstractControl ): {[ key: string ] : any } => {
        if( ! /^\d+$/.exec( control.value ) ) {
            return {
                'number'   :   true
            };
        }       
        return null;
    }
}