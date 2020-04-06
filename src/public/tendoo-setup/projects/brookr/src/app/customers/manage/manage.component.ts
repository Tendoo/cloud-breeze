import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Form } from '@cloud-breeze/core';
import { TendooService } from '@cloud-breeze/services';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode  = 'create';
  form: Form;
  id;
  constructor(
    private activatedRoute: ActivatedRoute,
    private tendoo: TendooService,
    private customerService: CustomersService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { 
    this.activatedRoute.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit'
        this.id   = param.get( 'id' );
      }
    });

    this.tendoo.forms.getPublicForm( 'brookr.customers' ).subscribe( ( form: Form ) => {
      this.form   = form;
    });
  }

  ngOnInit(): void {
  }

  handleSubmit( form: Form ) {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to prceed the form is not valid', 'OK', { duration: 3000 });
    }

    this.form.sections.forEach( s => ValidationGenerator.deactivateFields( s.fields ) );
    
    if ( this.id ) {
      this.customerService.updateCustomer( this.id, this.form.formGroup.value ).subscribe( result => {
        this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
        this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
      }, ( result: HttpErrorResponse ) => {
        this.snackbar.open( result[ 'error' ].message || result[ 'message' ], 'OK', { duration: 3000 });
        this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
      })
    } else {
      this.customerService.createCustomer( this.form.formGroup.value ).subscribe( result => {
        this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
        this.router.navigateByUrl( '/dashboard/customers/' );
      }, ( result: HttpErrorResponse ) => {
        this.snackbar.open( result[ 'error' ].message || result[ 'message' ], 'OK', { duration: 3000 });
        this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
      });
    }
  }

}
