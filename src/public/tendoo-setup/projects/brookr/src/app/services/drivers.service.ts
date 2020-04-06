import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseUrl: string;
  constructor(
    private tendoo: TendooService
  ) { 
    this.baseUrl    = this.tendoo.baseUrl;
    console.log( this.baseUrl );
  }

  setDriver( form, identifier = null ) {
    return this.tendoo[ identifier === null ? 'post' : 'put' ]( this.baseUrl + `/api/brookr/drivers${identifier !== null ? '/' + identifier : '' }`, form );
  }

  deleteDriver( id ) {
    return this.tendoo.delete( this.baseUrl + '/api/brookr/drivers/' + id );
  }

  getDrivers() {
    return this.tendoo.get( this.baseUrl + '/api/brookr/drivers' );
  }
}
