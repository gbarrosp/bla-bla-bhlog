import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      let authEndpoints = ['login', 'sign-up']
      if (event instanceof HttpResponse && (new RegExp(authEndpoints.join('|')).test(event.url!))) {
        if (request.method === 'POST' && event.body) {
          localStorage.setItem('access_token', event.body.data);
        }
      }
      return event
    }))
  }
}
