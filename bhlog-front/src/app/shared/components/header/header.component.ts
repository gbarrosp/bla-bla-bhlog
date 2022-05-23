import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { HomeView, LoginView, PhotosView, PostsView } from 'app/shared/utils/views.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  navigateTo(url: string){
    this.router.navigate([url])
  }

  logout(){
    this.authService.logOut()
  }
}
