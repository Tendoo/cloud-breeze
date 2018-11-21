import { Field } from "./field";
import { FormGroup } from "@angular/forms";

export interface Tab {
    label: string;
    namespace: string;
    columns?: Field[][],
    form?: FormGroup;
}