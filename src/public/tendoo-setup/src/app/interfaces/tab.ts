import { Field } from "./field";
import { FormGroup } from "@angular/forms";

export interface Tab {
    label: string;
    namespace: string;
    active: boolean;
    fields: Field[],
    columns?: Field[][],
    form?: FormGroup;
}