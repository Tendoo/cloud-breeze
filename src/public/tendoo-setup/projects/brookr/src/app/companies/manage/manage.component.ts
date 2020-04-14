import { Component, OnInit } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Form } from '@cloud-breeze/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { ValidationGenerator } from '@cloud-breeze/utilities';
import { TendooAuthService } from 'dist/cloud-breeze/services/lib/services/tendoo-auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: Form;
  mode: string;
  id: number;

  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private snapshot: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.snapshot.paramMap.subscribe( param => {
      this.mode   = param.get( 'id' ) !== null ? 'edit' : 'create';
      this.id     = +param.get( 'id' );
      console.log( param.get( 'id' ) );
      this.tendoo.forms.getPublicForm( 'brookr.companies', this.mode === 'edit' ? this.id : undefined ).subscribe( ( form: Form) => {
        this.form   = form;
      })
    })
  }

  handleSubmit( event ) {
    this.form.sections.forEach( s => ValidationGenerator.touchAllFields( s.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration : 3000 });
    }

    console.log( this.mode );
    this.tendoo[ this.mode === 'create' ? 'post' : 'put' ]( `${this.tendoo.baseUrl}brookr/companies${this.mode === 'edit' ? `/${this.id}` : '' }`, this.form.formGroup.value ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      this.router.navigateByUrl( '/dashboard/companies' );
    }, ( result: HttpErrorResponse ) => {
      this.snackbar.open( result[ 'error' ].message || result.message, 'OK', { duration: 6000 });
    });
  }

}
