import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(                                                                                                                                                                                                                                                                                                
    private tendoo: TendooService
  ) { }

  getReport() {
    return this.tendoo.post( `${this.tendoo.baseUrl}brookr/dashboard`, {}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     );
  }

  refreshReport() {
    return this.tendoo.post( `${this.tendoo.baseUrl}brookr/dashboard/refresh`, {});
  }
}
