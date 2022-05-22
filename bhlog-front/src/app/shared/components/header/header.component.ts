import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeView, LoginView, PhotosView, PostsView } from 'app/shared/utils/views.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateTo(url: string){
    this.router.navigate([url])
  }

  logout(){
    localStorage.clear()
    this.router.navigate([`${LoginView.url}`])
  }
}
