import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagesEnum } from '@shared/enums/messages.enum';
import { MessageService } from '@shared/services/message.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.serverErrorHandler(error)
        return throwError(() => error);
      })
    );
  }

  private serverErrorHandler(error: HttpErrorResponse){
    if (error.status === 400){
      if (this.validError(error)) {
        this.messageService.openDialog(true, this.messageService.getMessages(error.error.errors))
      } else {
        this.messageService.openDialog(true, MessagesEnum.INTERNAL_SERVER_ERROR)
      }
    } else if (error.status === 401) {
      this.messageService.openDialog(true, MessagesEnum.ERROR_401)
    } else if (error.status === 403) {
      this.messageService.openDialog(true, MessagesEnum.ERROR_403)
    } else if (error.status === 500) {
      this.messageService.openDialog(true, MessagesEnum.INTERNAL_SERVER_ERROR)
    }
  }

  private validError(error: HttpErrorResponse): boolean {
    if (error.error.errors) {
      return true
    }
    return false
  }

}
