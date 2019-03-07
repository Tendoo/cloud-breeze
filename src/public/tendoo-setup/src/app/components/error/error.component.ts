import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TendooService } from 'src/app/services/tendoo.service';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
	errorCode: string 	=	undefined;
	constructor(
		private activateRoute: ActivatedRoute,
		public tendoo: TendooService
	) { }
	
	ngOnInit() {
		this.activateRoute.paramMap.subscribe( params => {
			this.errorCode 	=	params.get( 'code' );
			console.log( this.errorCode );
		})
	}
	
}
