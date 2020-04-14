import { Menu } from '../interfaces/Menu';
import { on, createAction, createReducer, Action } from '@ngrx/store';
import { AppActions } from './action';
import { Notification } from '../interfaces/Notification';

export interface AppState {
    dashboardMenus: Menu[],
    authenticated : boolean;
    sidebarToggled: boolean;
    notificationsToggled: boolean;
    fetchNotifications: boolean;
    notifications: Notification[],
    asyncLoading: boolean;
}

export const AppInitialState: AppState = {
    authenticated: false,
    asyncLoading: false,
    notifications: [],
    fetchNotifications: false,
    sidebarToggled: false,
    notificationsToggled: false,
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
                },
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
            label: 'Companies',
            toggled: false,
            icon: 'business',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/companies'
                }, {
                    label: 'Create',
                    path: '/dashboard/companies/create'
                }
            ]
        }, {
            label: 'Reports',
            toggled: false,
            icon: 'trending_up',
            childrens: [
                {
                    label: 'Driver Statement',
                    path: '/dashboard/reports/driver-statement'
                }, 
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
    on( AppActions.startAsyncLoading, ( state: AppState ) => ({ ...state, asyncLoading : true })),
    on( AppActions.stopAsyncLoading, ( state: AppState ) => ({ ...state, asyncLoading : false })),
    on( AppActions.fetchNotifications, ( state: AppState ) => {
        return ({...state, fetchNotifications: true });
    }),
    on( AppActions.storeNotifications, ( state: AppState, args ) => {
        return ({...state, notifications : [
            ...state.notifications,
            ...args.notifications
        ]});
    }),
    on( AppActions.deleteNotification, ( state: AppState, arg ) => {
        const notifications     =   state.notifications.filter( n => n.id !== arg.id );
        return ({
            ...state,
            notifications
        })
    }),
    on( AppActions.toggleNotification, ( state: AppState ) => ({ ...state, notificationsToggled : ! state.notificationsToggled })),
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