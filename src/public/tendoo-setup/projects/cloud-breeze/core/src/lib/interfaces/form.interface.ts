import { FormGroup } from '@angular/forms';
import { Field } from "./field";

export interface Form {
    sections: {
        namespace?: string;
        title?: string;
        description?: string;
        fields?: Field[],
        formGroup?: FormGroup,
    }[],

    /**
     * where the form should
     * be submitted
     */
    url?: string;
    title?: string;
    description?: string;
    formGroup?: FormGroup
}