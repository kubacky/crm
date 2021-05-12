import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private notificationService: NotificationsService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {

        if (error.error instanceof ErrorEvent) {
          console.log(error.error.message)
        }
        else {
          console.log(error)
        }
        return throwError('')
      })
    )
  }
}