import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

const URL = 'https://cvillegas-dev.com:9191';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${URL}/data/projects`);
  }

  findMonthlyPayments(): Observable<any[]> {
    return this.http.get<Project[]>(`${URL}/data/monthly-services`);
  }
}
