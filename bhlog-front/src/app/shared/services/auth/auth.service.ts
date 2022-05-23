import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { LoginView } from 'app/shared/utils/views.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  logOut(){
    localStorage.clear()
    this.router.navigate([`${LoginView.url}`])
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUser(): User {
    return {id: '1', name: 'eu', username: 'nozi'};
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
