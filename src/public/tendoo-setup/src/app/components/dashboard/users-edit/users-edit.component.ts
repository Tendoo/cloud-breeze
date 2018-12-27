import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TendooService } from 'src/app/services/tendoo.service';
import { Field } from 'src/app/interfaces/field';
import { FormUrl } from 'src/app/interfaces/form-url';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponentE implements OnInit {
    
    // fields: Field[]     =   [];
    // formConfig: FormUrl;   
    // form: FormGroup;

    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        // forkJoin(
        //     this.tendoo.forms.getForm( 'dashboard.users.edit' ),
        // ).subscribe( forkResult => {
        //     this.fields         =   <Field[]>forkResult[0][ 'fields' ];
        //     this.formConfig     =   <FormUrl>forkResult[0][ 'url' ]
        //     const fields        =   ValidationGenerator.buildFormControls( this.fields );
        //     this.form           =   new FormGroup( fields );
        // })
    }
    
}
