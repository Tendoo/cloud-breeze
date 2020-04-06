import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TendooService } from '@cloud-breeze/services';
import { Form } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { DriversService } from '../../../services/drivers.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode  = 'create';
  id    = '';
  form: Form;
  constructor(
    private routeSnapshot: ActivatedRoute,
    private tendoo: TendooService,
    private client: HttpClient,
    private driversService: DriversService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSnapshot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
        this.id     = param.get( 'id' );
      }
      this.generateForm();
    });
  }

  generateForm() {
    this.tendoo.forms.getPublicForm( 'brookr.drivers', +this.id > 0 ? +this.id : undefined ).subscribe( (form:Form) => {
      this.form   = form;
    });
  }

  selectThis( section ) { 
    this.form.sections.forEach( s => s[ 'active' ] = false );
    section.active  = true;
  }

  handleSubmit( form: Form ) {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed, the form is invalid', 'OK', { duration: 3000 });
    }

    this.setFieldsState( 'disable' );
    this.driversService.setDriver( this.form.formGroup.value, +this.id > 0 ? +this.id : null ).subscribe( result => {
      this.setFieldsState( 'enable' );
      this.snackbar.open( result[ 'message' ], 'OK', { duration : 3000 });

      if ( ! this.id ) {
        this.router.navigateByUrl( '/dashboard/drivers' );
      }
    }, ( result ) => {
      this.snackbar.open( result[ 'error' ].message || result[ 'message' ] || 'An unexpected error has occured', 'OK', { duration : 3000 });
      this.setFieldsState( 'enable' );
    })
  }

  setFieldsState( state ) {
    this.form.sections.forEach( s => ValidationGenerator[ state === 'disabled' ? 'deactivateFields' : 'enableFields' ]( s.fields ) );
  }
}
