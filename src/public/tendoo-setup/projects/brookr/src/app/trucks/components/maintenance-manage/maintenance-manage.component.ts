import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TendooService } from '@cloud-breeze/services';
import { Form } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { TrucksMaintenancesService } from '../../../services/trucks-maintenances.service';

@Component({
  selector: 'app-maintenance-manage',
  templateUrl: './maintenance-manage.component.html',
  styleUrls: ['./maintenance-manage.component.scss']
})
export class MaintenanceManageComponent implements OnInit {
  mode = 'create';
  identifier = '';
  form: Form;
  constructor(
    private trucksMaintenances: TrucksMaintenancesService,
    private snapshot: ActivatedRoute,
    private snackbar: MatSnackBar,
    private tendoo: TendooService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.snapshot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
        this.identifier   = param.get( 'id' );
      }

      this.tendoo.forms.getPublicForm( 'brookr.trucks-maintenances', this.identifier ? +this.identifier : undefined ).subscribe( ( form: Form ) => {
        this.form   = ValidationGenerator.buildForm( form );
      })
    })
  }

  handleSubmit( event ) {
    this.form.sections.forEach( section => ValidationGenerator.touchAllFields( section.formGroup ) );
    
    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }
    
    this.fieldsControl( 'disable' );
    this.trucksMaintenances.saveMaintenance( this.form.formGroup.value, this.identifier || '' ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      if ( ! this.identifier ) {
        this.router.navigateByUrl( '/dashboard/trucks/maintenances' );
      } else {
        this.fieldsControl( 'enable' );
      }
    }, ( result ) => {
      this.fieldsControl( 'enable' );
      this.form.sections.forEach( section => ValidationGenerator.enableFields( section.fields ) );
      this.snackbar.open( result[ 'error' ].message || 'An unexpected error has occured', 'OK' );
    })
  }

  fieldsControl( action ) {
    switch( action ) {
      case 'disable' : this.form.sections.forEach( section => ValidationGenerator.deactivateFields( section.fields ) );break;
      case 'enable' : this.form.sections.forEach( section => ValidationGenerator.enableFields( section.fields ) );break;
    }
  }
}
