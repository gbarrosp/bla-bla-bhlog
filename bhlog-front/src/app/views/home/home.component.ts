import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { PhotosView, PostsView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username!: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername()
  }

  navigateToPosts(){
    this.router.navigate([`/${PostsView.url}`])
  }

  navigateToPhotos(){
    this.router.navigate([`/${PhotosView.url}`])
  }
}
