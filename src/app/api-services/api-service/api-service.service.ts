import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { InterceptorSkipHeader } from '../interceptor/httpconfig.interceptor';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  login(user: string, pwd: string): Observable <any> {
    let data = { email: user, password: pwd };
    return this.http.post(`${this.baseUrl}api/auth/login`, data);
  }

  logout(): Observable <any> {
    return this.http.post(`${this.baseUrl}api/auth/logout`,{});
  }

  getUserDetails(id: number): Observable <any> {
    return this.http.get(`${this.baseUrl}api/auth/get-user?id=${id}`);
  }

  updateUserProfile(data: any): Observable <any> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http.post(`${this.baseUrl}api/auth/update-user`, data, { headers: headers});
  }

  registerUser(data: any): Observable <any> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http.post(`${this.baseUrl}api/auth/register`, data, { headers: headers});
  }

  getUsersTeam(userId: number): Observable <any> {
    return this.http.get(`${this.baseUrl}api/auth/get-user-team?id=${userId}`,);
  }

}
