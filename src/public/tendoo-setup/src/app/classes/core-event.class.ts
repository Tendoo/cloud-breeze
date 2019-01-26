import { EventEmitter, Injectable } from "@angular/core";
import { CoreAction } from "../interfaces/core-action";

@Injectable({
    providedIn: 'root'
})
export class CoreEvent extends EventEmitter<CoreAction> {
    constructor() {
        super( true );
    }
}