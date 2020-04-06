import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Form } from '@cloud-breeze/core';
import { ValidationGenerator } from '@cloud-breeze/utilities';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input( 'form' ) form: Form;
  @Output( 'submit' ) submit  = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    console.log( this.form );
    this.renderable.forEach( (section, index) => {
      if ( index === 0 ) {
        section[ 'active' ] = true;
      } else {
        section[ 'active' ] = false;
      }
    })
    if ( this.form.formGroup === undefined ) {
      this.form   = ValidationGenerator.buildForm( this.form );
    }
  }

  selectThis( section ) {
    this.form.sections.forEach( s => s[ 'active' ] = false );
    section.active  = true;
  }

  submitForm() {
    this.submit.emit( this.form );
  }

  get renderable() {
    return this.form.sections.filter( section => {
      if ( section[ 'render' ] !== undefined && section[ 'render' ] === false ) {
        return false;
      }
      return true;
    })
  }
}
