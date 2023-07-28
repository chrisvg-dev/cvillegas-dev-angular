import { Injectable, Inject, Optional } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { catchError, throwError } from "rxjs";
import { SpringbootService } from "src/app/services/springboot.service";

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor( private authService: SpringbootService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(catchError( (err: HttpErrorResponse) => {
      if (err.status === 401) {
        this.authService.logOut();
        return next.handle( req );
      } else {
        return throwError(() => err) 
      }
    }));
  }
}