import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { finalize, tap } from 'rxjs/operators';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService: SpinnerService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(event => this.spinnerService.spinner.next(true)),
      finalize(() => this.spinnerService.spinner.next(false))
    )
  }
}