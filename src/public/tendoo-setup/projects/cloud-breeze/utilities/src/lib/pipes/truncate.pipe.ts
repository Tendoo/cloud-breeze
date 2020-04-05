import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
	transform(value: string, args?: any): any {
		const limit 	=	args.limit === undefined ? 20 : parseInt( args.limit );
		return value.length > limit ? value.substr( 0, limit ) + '...': value;
	}	
}