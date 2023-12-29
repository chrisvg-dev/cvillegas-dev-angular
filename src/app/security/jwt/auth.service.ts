import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service.service';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorareService: LocalStorageService, private jwtService: JwtTokenService) {}
  
  getJWTToken() {
    return this.localStorareService.get('token');
  }

  hasAccess(): boolean {
    return true;
  }
}
