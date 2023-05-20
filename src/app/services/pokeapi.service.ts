import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<Observable<any>>(POKE_API_URL);
  }
}
