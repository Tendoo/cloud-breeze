import { Injectable } from '@angular/core';
import { TrucksService } from './trucks.service';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class TrucksMaintenancesService {
  baseUrl: string;
  constructor(
    private tendoo: TendooService,
  ) { 
    this.baseUrl  = this.tendoo.baseUrl;
  }

  saveMaintenance( fields, identifier = null ) {
    const method    =   ( [ '', null ].includes( identifier ) ? 'post' : 'put' );
    return this.tendoo[ method ]( `${this.tendoo.baseUrl}brookr/trucks-maintenances${ identifier ? '/' + identifier : '' }`, fields );
  } 

  deleteMaintenance( id ) {
    return this.tendoo.delete( `${this.baseUrl}brookr/trucks-maintenances/${id}` );
  }
}
