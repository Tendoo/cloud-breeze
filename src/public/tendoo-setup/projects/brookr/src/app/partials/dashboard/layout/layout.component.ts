import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';
import { AppState } from '../../../store/state';
import { AppActions } from '../../../store/action';
import { NotificationsService } from '../../../services/notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeInterval, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  state$: Observable<AppState>;
  notificationIds: number[];
  loopInterval: Subscription;
  constructor(
    public store: Store<{ state: AppState }>,
    private notificationService: NotificationsService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.state$             = this.store.pipe( select( 'state' ) );
    this.state$.subscribe( state => {
      this.notificationIds  = state.notifications.map( n => n.id );
      console.log( this.notificationIds );
    });

    const intervalRef   = interval(5000);
    this.loopInterval   = intervalRef.pipe( timeInterval() ).subscribe( v => {
      this.fetchNotifications();
    });
  }

  ngOnDestroy() {
    console.log( 'im called' );
    this.loopInterval.unsubscribe();
  }

  fetchNotifications() {
    this.notificationService
        .getNotifications( this.notificationIds )
        .subscribe( ( notifications: Notification[] ) => {
          this.store.dispatch( AppActions.storeNotifications({ notifications }));
      });
  }

  toggleMenu( menu, index ) {
    this.store.dispatch( AppActions.toggleMenu({ menu, index }) );
  }

  toggleSidebar() {
    this.store.dispatch( AppActions.toggleSidebar() );  
  }

  toggleNotifications() {
    this.store.dispatch( AppActions.toggleNotification() );
  }

  closeNotification( notification ) {
    this.notificationService.deleteNotification( notification.id ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      /**
       * We'll remove the delted 
       * notification from the index
       */
      this.notificationIds.splice( 
        this.notificationIds.indexOf( notification.id ), 
        1 
      );
      this.store.dispatch( AppActions.deleteNotification({ id : notification.id }));
      this.fetchNotifications();
    })
  }
}
