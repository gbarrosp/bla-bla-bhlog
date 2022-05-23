import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { LoginView } from 'app/shared/utils/views.utils';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<Response>(`${environment.serverUrl}/auth/login`,JSON.stringify({ username: username, password: password }))
  }

  signUp(user: User): Observable<any> {
    return this.http.post<Response>(`${environment.serverUrl}/auth/sign-up`, user)
  }

  logOut(){
    localStorage.clear()
    this.router.navigate([`${LoginView.url}`])
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUser(): User {
    return {id: 'ac16b001-80f2-14c0-8180-f2ad6a490000', name: 'eu', username: 'nozi'};
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  // private getHeaders(): HttpHeaders {
  //   const headers = new HttpHeaders({'content-type': 'application/json', accept: 'application/json'});
  //   return headers;
  // }
}
