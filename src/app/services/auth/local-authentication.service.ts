import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/security/jwt/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthenticationService {

  constructor(private storage: LocalStorageService) { }

  isLogged(): boolean {
    return this.storage.get('isLogged') == 'true' ? true : false;
  }

  setLogged(value: string) {
    this.storage.set('isLogged', value);
  }
}
