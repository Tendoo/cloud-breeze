import { Injectable, Inject } from '@angular/core';
import { ConfigOptions } from '../services.module';

@Injectable({
    providedIn: 'root'
})
export class TendooConfigService {
    baseUrl: string;
    angularUrl: string;
}