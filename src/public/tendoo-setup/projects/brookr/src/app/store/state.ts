import { Menu } from '../interfaces/Menu';
import { on, createAction, createReducer, Action } from '@ngrx/store';
import { AppActions } from './action';

export interface AppState {
    dashboardMenus: Menu[],
    authenticated : boolean;
    sidebarToggled: boolean;
}

export const AppInitialState: AppState = {
    authenticated: false,
    sidebarToggled: false,
    dashboardMenus: [
        {
            label: 'Dashboard',
            path: '/dashboard',
            toggled: false,
            icon: 'dashboard',
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/loads'
                }, {
                    label: 'Create',
                    path: '/dashboard/loads/create'
                }
            ]
        }, {
            label: 'Trucks',
            toggled: false,
            icon: 'local_shipping',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/trucks'
                }, {
                    label: 'Create',
                    path: '/dashboard/trucks/create'
                }, {
                    label: 'Maintenance',
                    path: '/dashboard/trucks/maintenances'
                }
            ]
        }, {
            label: 'Drivers',
            toggled: false,
            icon: 'people_alt',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/drivers'
                }, {
                    label: 'Create',
                    path: '/dashboard/drivers/create'
                }
            ]
        }, {
            label: 'Customers',
            toggled: false,
            icon: 'people',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/customers'
                }, {
                    label: 'Create',
                    path: '/dashboard/customers/create'
                }
            ]
        }, {
            label: 'Settings',
            path: '/dashboard/settings',
            toggled: false,
            icon: 'settings'
        }
    ]
}

const reducer    =   createReducer(
    AppInitialState,
    on( AppActions.login, ( state: AppState ) =>  ({ ...state, authenticated: true })),
    on( AppActions.logout, ( state: AppState ) =>  ({ ...state, authenticated: false })),
    on( AppActions.toggleSidebar, ( state: AppState ) => ({ ...state, sidebarToggled : ! state.sidebarToggled })),
    on( AppActions.toggleMenu, ( state: AppState, { menu, index }) => {
        let cloneState  =   Object.assign( state, {});
        if ( cloneState.dashboardMenus[ index ].toggled === false ) {
            cloneState.dashboardMenus.forEach( _menu => {
                console.log( _menu );
                _menu[ 'toggled' ] = false;
            });
            cloneState.dashboardMenus[ index ].toggled   =   !cloneState.dashboardMenus[ index ].toggled;
        } else {
            cloneState.dashboardMenus[ index ].toggled   = false;
        }
        return state;
    })
);

export function AppReducer( state: AppState | undefined, action: Action ) {
    return reducer( state, action );
}