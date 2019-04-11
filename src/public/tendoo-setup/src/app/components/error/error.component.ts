import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';
import { TendooSpinnerService } from 'src/app/services/tendoo-spinner.service';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, AfterViewInit {
	errorCode: string 	=	undefined;
	constructor(
		private activateRoute: ActivatedRoute,
		public tendoo: TendooService,
		private spinner: TendooSpinnerService
	) { }

	ngAfterViewInit() {
	}
	
	ngOnInit() {
		this.activateRoute.paramMap.subscribe( params => {
			this.errorCode 	=	params.get( 'code' );
		})
	}
	
}
