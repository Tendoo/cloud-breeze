import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';
import { AppState } from '../../../store/state';
import { AppActions } from '../../../store/action';
import { NotificationsService } from '../../../services/notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeInterval, map } from 'rxjs/operators';
import { Menu } from '../../../interfaces/Menu';
import { TendooService } from '@cloud-breeze/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, OnChanges {
  state$: Observable<AppState>;
  notificationIds: number[];
  menuToggled   = false;
  user;
  loopInterval: Subscription;
  menuIconToggled: boolean  = true;
  constructor(
    public store: Store<{ state: AppState }>,
    private notificationService: NotificationsService,
    private snackbar: MatSnackBar,
    private tendoo: TendooService,
  ) { }

  ngOnInit(): void {
    this.user           = this.tendoo.auth.getUser();
    this.state$         = this.store.pipe( select( 'state' ) );
    this.state$.subscribe( state => {
      this.notificationIds  = state.notifications.map( n => n.id );
    });
    const intervalRef   = interval(10000);
    this.loopInterval   = intervalRef.pipe( timeInterval() ).subscribe( v => {
      this.fetchNotifications();
    });
  }

  handleHoverEvent( event ) {
    if ( event === 'hovered' ) {
      this.store.dispatch( AppActions.uncompressSidebar() );
    } else {
      this.store.dispatch( AppActions.compressSidebar() );
      this.store.dispatch( AppActions.toggleSidebarSubMenus({ status: false }));
    }
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
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

  /**
   * Checks if the logged user can see the menu
   * based on the permissions added to his role
   * via the Authentication.guard.
   * @param menu Menu
   */
  canSeeMenu( menu: Menu ) {
    if( menu.hasPermissions !== undefined ) {
      const isAllowed   = menu.hasPermissions.map( permission => {
        const userPermissions   = (<string[]>this.tendoo.auth.getUser().role[ 'permissions' ]);
        if ( userPermissions.includes( permission ) ) {
          return true;
        }
        return false;
      }).filter( m => m );

      return isAllowed.length === menu.hasPermissions.length;
    }

    if ( menu.hasOnePermission !== undefined ) {
      const isAllowed   = menu.hasOnePermission.map( permission => {
        if ( (<string[]>this.tendoo.auth.getUser().role[ 'permissions' ]).includes( permission ) ) {
          return true;
        }
        return false;
      }).filter( m => m );

      return isAllowed.length > 0;
    }
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

  toggleMenuIcons() {
    this.store.dispatch( AppActions.toggleSidebarCompression() );
  }
}