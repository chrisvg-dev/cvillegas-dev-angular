import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

const URL = environment.SERVER;

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

  findMyCourses(criteria: string) {
    return this.http.get<any[]>(`${URL}/data/my-courses?criteria=` + criteria);
  }

  findMyCertificate(criteria: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>(`${URL}/data/my-courses/getCertificate/${criteria}`, { headers, responseType: 'text' as 'json'});
  }

  saveCourse(request: FormData) {
    return this.http.post( `${URL}/data/my-courses/putCertificate`, request);
  }

  deleteCourse(id: number) {
    return this.http.delete( `${URL}/data/my-courses/${id}`);
  }

  // Base 64 converter application

  convertToBase64(formData: FormData) {
    return this.http.post( `${URL}/apps/base64Converter`, formData);
  }
}
