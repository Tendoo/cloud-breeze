import { Component } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  constructor(
    private tendoo: TendooService
  ) {
    this.tendoo.auth.login({
      username: 'blair2004',
      password: 'sanches'
    }).subscribe( result => {
      console.log( result );
    })
  }
}
