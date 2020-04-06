import { createAction, props } from "@ngrx/store";
import { User } from '../interfaces/User';
import { Menu } from '../interfaces/Menu';

export const AppActions     =   {
    login : createAction( 'auth.logged-in' ),
    logout : createAction( 'auth.logged-out' ),
    toggleSidebar : createAction( 'dashboard.toggle-sidebar' ),
    toggleMenu: createAction( 'dashboard.toggle-menu', props<{ menu: Menu, index: number }>() ),
}