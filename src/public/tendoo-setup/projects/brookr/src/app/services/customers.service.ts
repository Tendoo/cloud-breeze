import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl: string;

  constructor(
    private tendoo: TendooService
  ) {
    this.baseUrl  = this.tendoo.baseUrl;
  }

  createCustomer( fields ) {
    return this.tendoo.post( `${this.baseUrl}brookr/customers`, fields );
  }

  updateCustomer( id, fields ) {
    return this.tendoo.put( `${this.baseUrl}brookr/customers/${id}`, fields );
  }

  deleteCustomer( id ) {
    return this.tendoo.delete( `${this.baseUrl}brookr/customers/${id}` );
  }

  getCustomers() {
    return this.tendoo.get( `${this.baseUrl}brookr/customers` );
  }
}
