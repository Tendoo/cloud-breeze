import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private tendoo: TendooService,
  ) { }

  deleteNotification( id ) {
    return this.tendoo.delete( `${this.tendoo.baseUrl}brookr/notifications/${id}` );
  }

  getNotifications( excluded ) {
    return this.tendoo.post( `${this.tendoo.baseUrl}brookr/notifications#disable-spinner`, { excluded });
  }
}
