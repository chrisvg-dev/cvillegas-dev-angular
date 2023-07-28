import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { SpringbootService } from 'src/app/services/springboot.service';
import { LocalStorageService } from './local-storage-service.service';
import { JwtTokenService } from './jwt-token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginService: SpringbootService,
              private authStorageService: LocalStorageService,
              private jwtService: JwtTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {

      let storatedToken = this.authStorageService.get('token');
      const token: string = storatedToken != null ? storatedToken : '';
      this.jwtService.setToken( token ) ;

      if (this.jwtService.getUser()) {
        console.log(this.jwtService.isTokenExpired());
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
            return false;
          } else {
            return true;
          }
      } else {
        /*return new Promise((resolve) => {
          this.loginService.signIncallBack().then((e) => {
             resolve(true);
          }).catch((e) => {
            // Should Redirect Sign-In Page
          });
        });*/
        console.log(this.jwtService.isTokenExpired());
        return false;
      }
  }
}