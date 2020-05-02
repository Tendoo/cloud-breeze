import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";

export interface Field {
    type: 'text' | 'textarea' | 'email' | 'file' | 'number' | 'datetime' | 'date' | 'hidden' | 'select' | 'multiple_select' | 'password' | 'button' | 'switch' | 'recaptcha' | 'ng-datetime';
    name: string;
    label:string;
    value?: string | number | FieldOption;
    description?: string;
    validation?: string;
    placeholder?:string;
    options?: FieldOption[],
    show?: ( resource: any ) => boolean,
    control?: FormControl,
    disabled?: boolean;
    readonly?: boolean;
    onClick?: ( form: FormGroup ) => void,
    appearance?: 'standard' | 'fill' | 'outline' | 'legacy',
    errors?: string[],
    data?: any
    suffix?: string;
    prefix?: string;
    reset?: EventEmitter<boolean>;
    clear?: () => void
}
export interface FieldOption {
    label: string;
    value: any;
}