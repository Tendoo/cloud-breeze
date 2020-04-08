import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        LoaderService.asyncLoading.next( true );
        return next.handle( req ).pipe(
            finalize( () => {
                LoaderService.asyncLoading.next( false );  
            })
        )
    }
}