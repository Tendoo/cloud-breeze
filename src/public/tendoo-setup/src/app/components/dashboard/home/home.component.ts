import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class DashboardHomeComponent implements OnInit {

  constructor(
    public tendoo: TendooService
  ) { }

  ngOnInit() {
  }

}
