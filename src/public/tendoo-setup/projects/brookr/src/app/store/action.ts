import { createAction, props } from "@ngrx/store";
import { User } from '../interfaces/User';
import { Menu } from '../interfaces/Menu';

export const AppActions     =   {
    login : createAction( 'auth.logged-in' ),
    logout : createAction( 'auth.logged-out' ),
    toggleSidebar : createAction( 'dashboard.toggle-sidebar' ),
    startAsyncLoading: createAction( 'start.async-loading' ),
    stopAsyncLoading: createAction( 'stop.async-loading' ),
    fetchNotifications: createAction( 'dashboard.fetch-notifications' ),
    deleteNotification: createAction( 'dashboard.delete-notifications', props<{ id: number}>() ),
    toggleNotification: createAction( 'dashboard.toggle-notifications' ),
    storeNotifications: createAction( 'dashboard.store-notifications', props<{ notifications: Notification[] }>() ),
    toggleMenu: createAction( 'dashboard.toggle-menu', props<{ menu: Menu, index: number }>() ),
}