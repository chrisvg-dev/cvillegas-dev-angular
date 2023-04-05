import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GITHUB_API_URL = 'https://api.github.com/users/chrisvg-dev/repos'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) {}

  listAll(): Observable<any>{
    return this.http.get(GITHUB_API_URL);
  }

}
