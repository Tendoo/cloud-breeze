import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  baseUrl;

  constructor(
    private http: HttpClient,
    private tendoo: TendooService
  ) { 
    this.baseUrl  = this.tendoo.baseUrl;
  }

  save( fields, identifier = undefined ) {
    console.log( identifier );
    const method  = identifier !== undefined ? 'put' : 'post';
    return this.tendoo[ method ]( this.baseUrl + `brookr/trucks${ identifier === undefined ? '' : '/' + identifier }`, fields );
  }

  delete( id ) {
    return this.tendoo.delete( this.baseUrl + 'broork/trucks/' + id );
  }

  get() {
    return this.tendoo.get( this.baseUrl + `brookr/trucks` );
  }
}
