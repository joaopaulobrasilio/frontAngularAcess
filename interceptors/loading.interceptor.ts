import { LoaderService } from '../service/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoaderService) {}
   private totalReqs = 0;

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
  Observable<HttpEvent<unknown>> {

    this.totalReqs++;
    this.loadingService.setLoading(true)
    return next.handle(request).pipe(
      finalize(() => {
        this.totalReqs--;
        if (this.totalReqs == 0) {
          this.loadingService.setLoading(false);

        }
      })
    );
  }
}
