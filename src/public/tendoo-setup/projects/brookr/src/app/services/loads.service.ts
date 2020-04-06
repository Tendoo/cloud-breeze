import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {
  baseUrl: string;
  constructor(
    private tendoo: TendooService
  ) { 
    this.baseUrl  = this.tendoo.baseUrl;
  }

  createLoads( fields ) {
    return this.tendoo.post( `${this.baseUrl}/api/brookr/loads`, fields );
  }
}
