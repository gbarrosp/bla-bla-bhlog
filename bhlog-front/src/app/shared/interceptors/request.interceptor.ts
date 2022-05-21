import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResponseModel } from '@shared/models/response.model';
import { MessageService } from '@shared/services/message.service';
import { MessagesEnum } from '@shared/enums/messages.enum';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@shared/services/auth/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let apiEndpoints = ['5010', 'loop-bff']
    if ((new RegExp(apiEndpoints.join('|')).test(request.url!))){
      let token = this.oAuthService.getAccessToken();
      if (token){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
      } else {
        this.authService.logout()
      }
    }
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && (new RegExp(apiEndpoints.join('|')).test(event.url!))) {
        let response: ResponseModel = event.body
        if (response.notifications){
          if (Object.values(response.notifications).length > 0) {
            this.messageService.openDialog(false, this.messageService.getMessages(response.notifications))
          } else if (request.method === "DELETE") {
            this.messageService.openDialog(false, MessagesEnum.DELETE_SUCCESS)
          } else if (request.method !== "GET") {
            this.messageService.openDialog(false, MessagesEnum.SUCCESS)
          }
        } else {
          throw new Error('Invalid response.');
        }
      }
      return event;
    }));
  }
}
