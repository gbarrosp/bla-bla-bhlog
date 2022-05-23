import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.authService.isLoggedIn) {
    //   return true;
    // }
    // this.authService.logOut()
    // return false

    //TODO HABILITAR PARA VALIDAR AUTH
    return true
  }

}
