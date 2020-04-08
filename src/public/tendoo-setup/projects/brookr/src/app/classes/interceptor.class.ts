import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { tap, finalize } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../store/state";
import { AppActions } from "../store/action";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
        public store: Store<{ state: AppState }>
    ) {}

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const enableSpinner    =   req.url.search( /\#disable-spinner/) === -1;
        
        if ( enableSpinner ) {
            this.store.dispatch( AppActions.startAsyncLoading() );
        }

        return next.handle( req ).pipe(
            finalize( () => {
                if ( enableSpinner ) {
                    this.store.dispatch( AppActions.stopAsyncLoading() );
                }
            })
        )
    }
}