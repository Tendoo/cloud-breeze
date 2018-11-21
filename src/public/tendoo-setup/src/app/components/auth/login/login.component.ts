import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';
import { TendooService } from 'src/app/services/tendoo.service';
import { ValidationGenerator } from 'src/app/classes/validation-generator.class';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    fields: Field[]     =   [];
    loginForm: FormGroup;

    constructor(
        public tendoo: TendooService
    ) { }
    
    ngOnInit() {
        this.fields     =   [
            {
                label: 'Username',
                name: 'username',
                type: 'text',
                description: 'Username saved during the registration.'
            }, {
                label: 'Password',
                name: 'password',
                type: 'password',
                description: 'Only you knows what is the password'
            }
        ];

        const fields    =   ValidationGenerator.buildFormControls( this.fields );
        this.loginForm  =   new FormGroup( fields );
    }
    
}
