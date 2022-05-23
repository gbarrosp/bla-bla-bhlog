import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { LoginView } from 'app/shared/utils/views.utils';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

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

  getUsername(): string {
    let decodedToken = this.getDecodedAccessToken(localStorage.getItem('access_token')!)
    return decodedToken.sub
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
