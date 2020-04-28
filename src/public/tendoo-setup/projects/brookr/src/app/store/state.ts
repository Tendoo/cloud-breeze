import { Menu } from '../interfaces/Menu';
import { on, createAction, createReducer, Action } from '@ngrx/store';
import { AppActions } from './action';
import { Notification } from '../interfaces/Notification';

export interface AppState {
    dashboardMenus: Menu[],
    authenticated : boolean;
    sidebarCompressed: boolean;
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
    sidebarCompressed: true,
    fetchNotifications: false,
    sidebarToggled: false,
    notificationsToggled: false,
    dashboardMenus: [
        {
            label: 'Dashboard',
            path: '/dashboard',
            toggled: false,
            icon: 'dashboard',
            hasPermissions: [
                'brookr.see.dashboard',
            ],
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            hasOnePermission: [ 
                'brookr.create.loads',
                'brookr.change.loads-status',
                'brookr.edit.loads',
                'brookr.delete.loads',
                'brookr.see.loads' 
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/loads',
                    hasOnePermission: [ 'brookr.see.loads' ]
                }, {
                    label: 'Create',
                    path: '/dashboard/loads/create',
                    hasPermissions: [ 'brookr.create.loads' ]
                }
            ]
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            path: '/dashboard/drivers/loads',
            hasOnePermission: [ 
                'brookr.see.drivers-loads',
            ]
        }, {
            label: 'Trucks',
            toggled: false,
            icon: 'local_shipping',
            hasOnePermission: [
                'brookr.see.trucks',
                'brookr.see.trucks-relatives',
                'brookr.edit.trucks-relatives',
                'brookr.delete.trucks-relatives',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/trucks',
                    hasPermissions: [
                        'brookr.see.trucks',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/trucks/create',
                    hasPermissions: [
                        'brookr.create.trucks'
                    ]
                }, {
                    label: 'Maintenance',
                    path: '/dashboard/trucks/maintenances',
                    hasOnePermission: [
                        'brookr.edit.trucks-relatives',
                    ],
                }
            ]
        }, {
            label: 'Drivers',
            toggled: false,
            icon: 'people_alt',
            hasOnePermission: [
                'brookr.create.drivers',
                'brookr.see.drivers',
                'brookr.delete.drivers',
                'brookr.edit.drivers',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/drivers',
                    hasPermissions: [
                        'brookr.see.drivers',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/drivers/create',
                    hasOnePermission: [
                        'brookr.create.drivers',
                    ],
                },
            ]
        }, {
            label: 'Customers',
            toggled: false,
            icon: 'people',
            hasOnePermission: [
                'brookr.create.customers',
                'brookr.see.customers',
                'brookr.delete.customers',
                'brookr.edit.customers',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/customers',
                    hasPermissions: [
                        'brookr.see.customers',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/customers/create',
                    hasPermissions: [
                        'brookr.create.customers',
                    ],
                }
            ]
        }, {
            label: 'Companies',
            toggled: false,
            icon: 'business',
            hasOnePermission: [
                'brookr.create.companies',
                'brookr.see.companies',
                'brookr.delete.companies',
                'brookr.edit.companies',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/companies',
                    hasPermissions: [
                        'brookr.see.companies',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/companies/create',
                    hasPermissions: [
                        'brookr.create.companies',
                    ]
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
            icon: 'settings',
            hasPermissions: [ 'brookr.edit.settings' ]
        }
    ]
}

const reducer    =   createReducer(
    AppInitialState,
    on( AppActions.toggleSidebarSubMenus, ( state: AppState, { status }) => {
        let cloneState  =   Object.assign( state, {});
        cloneState.dashboardMenus.forEach( _menu => {
            _menu[ 'toggled' ] = status;
        });
        return state;
    }),
    on( AppActions.toggleSidebarCompression, ( state: AppState ) => ({ ...state, sidebarCompressed: ! state.sidebarCompressed })),
    on( AppActions.compressSidebar, ( state: AppState ) => ({ ...state, sidebarCompressed: true })),
    on( AppActions.uncompressSidebar, ( state: AppState ) => ({ ...state, sidebarCompressed: false })),
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