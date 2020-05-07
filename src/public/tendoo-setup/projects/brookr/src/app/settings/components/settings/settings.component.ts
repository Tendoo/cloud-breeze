import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { Form } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'dist/cloud-breeze/services/lib/services/loader.service';
import { LoadsService } from '../../../services/loads.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  form: Form;

  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar
  ) { 

  }

  ngOnInit(): void {
    this.tendoo.forms.getPublicForm( 'brookr.settings' ).subscribe( ( form: Form ) => {
      this.form   = ValidationGenerator.buildForm( form );
    })
  }

  handleSubmit( event ) {
    this.tendoo.post( `${this.tendoo.baseUrl}brookr/settings`, this.form.formGroup.value ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
    })
  }
}
