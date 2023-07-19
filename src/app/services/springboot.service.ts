import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';

const URL = environment.LOCAL;

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

  findMyCourses() {
    return this.http.get<any[]>(`${URL}/data/my-courses`);
  }
}
