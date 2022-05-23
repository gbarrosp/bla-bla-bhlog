import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MessagesEnum } from '../enums/messages.enum';
import { ResponseModel } from '../models/response.model';
import { AuthService } from '../services/auth/auth.service';
import { MessageService } from '../services/message.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {'content-type': 'application/json', accept: 'application/json'}
    })
    let apiEndpoints = ['api/bhlog']
    if ((new RegExp(apiEndpoints.join('|')).test(request.url!))){
      const token = this.authService.getToken();
      if (token){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
      } else {
        this.authService.logOut()
      }
    }
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && (new RegExp(apiEndpoints.join('|')).test(event.url!))) {
        let response: ResponseModel = event.body
        if (request.method === "DELETE") {
          this.messageService.showMessage(MessagesEnum.DELETE_SUCCESS)
        } else if (request.method !== "GET") {
          this.messageService.showMessage(MessagesEnum.SUCCESS)
        }
      }
      return event;
    }));
  }
}
