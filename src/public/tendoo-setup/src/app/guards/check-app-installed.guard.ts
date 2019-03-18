import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SetupService } from '../services/setup.service';
import { TendooService } from '../services/tendoo.service';
import { AsyncResponse } from '../interfaces/async-response';
import { CoreMigrationDialogComponent } from '../shared/core-migration-dialog/core-migration-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class PreventAppNotInstalledGuard implements CanActivate {
    constructor(
        private setup: SetupService,
        private router: Router,
        private snackbar: MatSnackBar,
        private tendoo: TendooService,
        private dialog: MatDialog
    ){}
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise( async ( resolve, reject ) => {
                this.setup.ping().subscribe( async (result: any) => {
                    if ( result.status === 'not-installed' ) {
                        this.snackbar.open( result.message, 'INSTALL' ).afterDismissed().subscribe( action => {
                            if ( action.dismissedByAction ) {
                                this.router.navigateByUrl( 'do-setup' );
                            }
                        });
                        this.router.navigateByUrl( `error/${result.status}` );
                        return resolve( false );
                    }

                    /**
                     * check what was the result of the 
                     * database & files verification before 
                     * proceeding
                     */
                    const queue     =   <any[]>this.tendoo.update.needsUpdate( result );

                    if ( queue.length > 0 ) {
                        /**
                         * consider handling errors
                         * even here
                         */
                        const dialogObservable  =   this.dialog.open( CoreMigrationDialogComponent, {
                            data: { queue },
                            width: '400px',
                            disableClose: true,
                            id: 'core-migration-dialog',
                            closeOnNavigation: false,
                        }).afterClosed().subscribe( result => {
                            dialogObservable.unsubscribe();
                            resolve( true );
                        });

                    } else {
                        return resolve( true );
                    }

                }, result => {
                    this.snackbar.open( result.error.message || 'An unexpected error occured while checking the application status', null, {
                        duration: 3000
                    });
                    this.router.navigateByUrl( 'error' );
                    resolve( false );
                })
            })
        }
    }
    