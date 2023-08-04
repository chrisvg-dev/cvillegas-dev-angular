import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';
import { LocalStorageService } from '../security/jwt/local-storage-service.service';

const URL = environment.SERVER;

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  // Security
  login(request: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any[]>(`${URL}/auth/login`, request, { headers, withCredentials: true });
  }
  logOut(): Observable<any> {
    this.storage.set('isLogged', 'false');
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${URL}/auth/logOut`, { headers, withCredentials: true });
  }

  // Data Projects
  findProjects()  {
    return this.http.get(`${URL}/data/projects`, {withCredentials: true})
  }

  findTechSkill()  {
    return this.http.get(`${URL}/data/tech-skill`, {withCredentials: true})
  }

  findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${URL}/data/projects`, {withCredentials: true});
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
