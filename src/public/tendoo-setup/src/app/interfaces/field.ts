import { FormControl, FormGroup } from "@angular/forms";

export interface Field {
    type: 'text' | 'textarea' | 'email' | 'file' | 'number' | 'datetime' | 'hidden' | 'select' | 'multiple_select' | 'password' | 'button';
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
    errors?: string[]
}
export interface FieldOption {
    label: string;
    value: any;
}