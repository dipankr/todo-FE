import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from '../../../config';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let mutatedRequest: HttpRequest<any>;
        mutatedRequest = this.modifiedRequest(req);

        return next.handle(mutatedRequest);
    }

    updateUrl(url: string) {
        return CONFIG.API_URL + '/api' + url;
    }

    modifiedRequest(req: HttpRequest<any>) {
        return req.clone({
            url: this.updateUrl(req.url)
        });
    }
}
