import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private tendoo: TendooService
  ) { }

  getDashboardCardReport() {
    return this.tendoo.get( `${this.tendoo.baseUrl}/brookr/dashboard` );
  }
}
