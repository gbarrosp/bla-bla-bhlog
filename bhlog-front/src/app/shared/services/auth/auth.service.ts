import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
}
