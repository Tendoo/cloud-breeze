import { ValidatorFn, FormGroup, AbstractControl } from "@angular/forms";

export function MatchesValidator( matches ): ValidatorFn {
    return ( control: AbstractControl ): {[ key: string ] : any } => {
        if( control.value !== control.parent.get( matches ).value ) {
            return {
                'matches'   :   {
                    'formControl'       :   control.parent.get( matches ),
                    'formControlName'   :   matches
                }
            };
        }       
        return null;
    }
}