import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Form } from '@cloud-breeze/core';
import { TendooService } from '@cloud-breeze/services';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { LoadsService } from '../../../services/loads.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: Form;
  id : number;
  mode  = 'create';

  constructor(
    private activeSnapShot: ActivatedRoute,
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private router: Router,
    private loadsService: LoadsService,
  ) { }

  ngOnInit(): void {
    this.activeSnapShot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
        this.id   = +param.get( 'id' );
      }
    });
    
    this.tendoo.forms.getPublicForm( 'brookr.loads' ).subscribe( ( form: Form ) => {
      this.form     = ValidationGenerator.buildForm( form );
      this.form.sections.forEach( section => {
        if ( section.namespace  === 'main' ) {
          section[ 'render' ]   = false;
        }
      })
      this.form   = form;
    })
  }

  handleSubmit( form: Form ) {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      console.log( this.form );
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration : 3000 });
    }

    this.form.sections.forEach( s => ValidationGenerator.deactivateFields( s.fields ) );
    this.loadsService.createLoads( this.form.formGroup.value ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      this.router.navigateByUrl( '/dashboard/loads' );
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message || result.message || 'An unexpected error has occured.', 'OK', { duration: 6000 });
      this.form.sections.forEach( s => ValidationGenerator.enableFields( s.fields ) );
    });
  }
}
